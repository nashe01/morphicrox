
-- Fix the recursive RLS policy issue by dropping and recreating user_profiles policies
DROP POLICY IF EXISTS "Users can read their own profile" ON public.user_profiles;
DROP POLICY IF EXISTS "Admins can read all profiles" ON public.user_profiles;

-- Create a security definer function to check admin roles safely
CREATE OR REPLACE FUNCTION public.is_admin_or_editor(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_profiles 
    WHERE id = user_id AND role IN ('admin', 'editor')
  );
$$;

-- Recreate user_profiles policies without recursion
CREATE POLICY "Users can read their own profile" ON public.user_profiles 
  FOR SELECT USING (id = auth.uid());

CREATE POLICY "Users can update their own profile" ON public.user_profiles 
  FOR UPDATE USING (id = auth.uid());

-- Update other policies to use the new function
DROP POLICY IF EXISTS "Admins can manage site content" ON public.site_content;
DROP POLICY IF EXISTS "Admins can manage gallery projects" ON public.gallery_projects;
DROP POLICY IF EXISTS "Admins can manage gallery videos" ON public.gallery_videos;
DROP POLICY IF EXISTS "Admins can manage media files" ON public.media_files;

CREATE POLICY "Admins can manage site content" ON public.site_content 
  FOR ALL USING (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Admins can manage gallery projects" ON public.gallery_projects 
  FOR ALL USING (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Admins can manage gallery videos" ON public.gallery_videos 
  FOR ALL USING (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Admins can manage media files" ON public.media_files 
  FOR ALL USING (public.is_admin_or_editor(auth.uid()));

-- Update storage policies
DROP POLICY IF EXISTS "Admins can upload media files" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update media files" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete media files" ON storage.objects;

CREATE POLICY "Admins can upload media files" ON storage.objects 
  FOR INSERT WITH CHECK (
    bucket_id = 'media' AND public.is_admin_or_editor(auth.uid())
  );

CREATE POLICY "Admins can update media files" ON storage.objects 
  FOR UPDATE USING (
    bucket_id = 'media' AND public.is_admin_or_editor(auth.uid())
  );

CREATE POLICY "Admins can delete media files" ON storage.objects 
  FOR DELETE USING (
    bucket_id = 'media' AND public.is_admin_or_editor(auth.uid())
  );

-- Add more content for the updated frontend
INSERT INTO public.site_content (key, type, value, page, section, title, description) VALUES
  ('products_description', 'text', 'Discover our comprehensive range of premium ceramic products designed for residential, commercial, and hospitality applications. Each product is crafted with attention to detail and built to last.', 'products', 'services_description', 'Products Page Description', 'Main description on products page'),
  ('features_why_choose_title', 'text', 'Why Choose MorphicRox', 'home', 'services_title', 'Features Section Title', 'Title for the features section on home page'),
  ('features_premium_quality_title', 'text', 'Premium Quality', 'home', 'services_description', 'Premium Quality Feature', 'Premium quality feature title'),
  ('features_premium_quality_desc', 'text', 'Crafted with the finest materials and attention to detail', 'home', 'services_description', 'Premium Quality Description', 'Premium quality feature description'),
  ('features_free_delivery_title', 'text', 'Free Delivery', 'home', 'services_description', 'Free Delivery Feature', 'Free delivery feature title'),
  ('features_free_delivery_desc', 'text', 'Complimentary delivery and installation services', 'home', 'services_description', 'Free Delivery Description', 'Free delivery feature description'),
  ('features_warranty_title', 'text', '10 Year Warranty', 'home', 'services_description', 'Warranty Feature', 'Warranty feature title'),
  ('features_warranty_desc', 'text', 'Extended warranty coverage on all our products', 'home', 'services_description', 'Warranty Description', 'Warranty feature description'),
  ('features_support_title', 'text', 'Expert Support', 'home', 'services_description', 'Support Feature', 'Support feature title'),
  ('features_support_desc', 'text', 'Professional consultation and design assistance', 'home', 'services_description', 'Support Description', 'Support feature description')
ON CONFLICT (key) DO NOTHING;

-- Create admin user function
CREATE OR REPLACE FUNCTION create_admin_user(email TEXT, password TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_id UUID;
BEGIN
  -- This function would need to be called from the Supabase dashboard
  -- as we cannot create auth users directly from SQL
  RETURN 'Please create user through Supabase Auth and then update their role';
END;
$$;
