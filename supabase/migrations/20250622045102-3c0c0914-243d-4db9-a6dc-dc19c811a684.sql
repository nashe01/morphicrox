
-- Create enum for content types
CREATE TYPE content_type AS ENUM ('text', 'image', 'video', 'json');

-- Create enum for page sections
CREATE TYPE page_section AS ENUM (
  'hero_title', 'hero_subtitle', 'hero_description',
  'about_title', 'about_subtitle', 'about_description', 'about_intro',
  'services_title', 'services_description',
  'portfolio_title', 'portfolio_description',
  'contact_title', 'contact_description',
  'footer_text', 'company_info'
);

-- Main content management table
CREATE TABLE public.site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  type content_type NOT NULL DEFAULT 'text',
  value TEXT,
  page TEXT NOT NULL,
  section page_section,
  title TEXT,
  description TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gallery projects table
CREATE TABLE public.gallery_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Behind the scenes videos table
CREATE TABLE public.gallery_videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- File uploads table for managing all media
CREATE TABLE public.media_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER,
  alt_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User roles for admin access
CREATE TYPE user_role AS ENUM ('admin', 'editor', 'viewer');

CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role DEFAULT 'viewer',
  full_name TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access
CREATE POLICY "Public can read site content" ON public.site_content FOR SELECT USING (true);
CREATE POLICY "Public can read gallery projects" ON public.gallery_projects FOR SELECT USING (true);
CREATE POLICY "Public can read gallery videos" ON public.gallery_videos FOR SELECT USING (true);
CREATE POLICY "Public can read media files" ON public.media_files FOR SELECT USING (true);

-- Admin/Editor policies
CREATE POLICY "Admins can manage site content" ON public.site_content 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admins can manage gallery projects" ON public.gallery_projects 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admins can manage gallery videos" ON public.gallery_videos 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admins can manage media files" ON public.media_files 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

-- User profiles policies
CREATE POLICY "Users can read their own profile" ON public.user_profiles 
  FOR SELECT USING (id = auth.uid());

CREATE POLICY "Admins can read all profiles" ON public.user_profiles 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create storage bucket for media files
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

-- Storage policies
CREATE POLICY "Public can view media files" ON storage.objects 
  FOR SELECT USING (bucket_id = 'media');

CREATE POLICY "Admins can upload media files" ON storage.objects 
  FOR INSERT WITH CHECK (
    bucket_id = 'media' AND
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admins can update media files" ON storage.objects 
  FOR UPDATE USING (
    bucket_id = 'media' AND
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admins can delete media files" ON storage.objects 
  FOR DELETE USING (
    bucket_id = 'media' AND
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

-- Insert default content to populate the database with existing frontend content
INSERT INTO public.site_content (key, type, value, page, section, title, description) VALUES
  ('hero_main_title', 'text', 'Premium Ceramic Solutions', 'home', 'hero_title', 'Main Hero Title', 'The main title displayed on the homepage hero section'),
  ('hero_subtitle', 'text', 'Transform Your Space', 'home', 'hero_subtitle', 'Hero Subtitle', 'Secondary title in hero section'),
  ('hero_description', 'text', 'Discover our extensive collection of high-quality ceramic products for bathrooms, kitchens, and commercial spaces.', 'home', 'hero_description', 'Hero Description', 'Description text in hero section'),
  
  ('about_main_title', 'text', 'About MorphicRox', 'about', 'about_title', 'About Page Title', 'Main title for about page'),
  ('about_subtitle', 'text', 'Engineered Perfection', 'about', 'about_subtitle', 'About Subtitle', 'Subtitle for about page'),
  ('about_description', 'text', 'At MorphicRox, we believe in engineered perfection. Our commitment to excellence drives us to create premium ceramic solutions that transform spaces and elevate experiences.', 'about', 'about_description', 'About Description', 'Main description on about page'),
  ('about_know_title', 'text', 'Know About Us', 'about', 'about_intro', 'Know About Us Title', 'Title for the know about us section'),
  ('about_company_history', 'text', 'With years of expertise in the industry, we specialize in providing high-quality bathroom furniture, kitchen solutions, office installations, and hospitality fixtures that combine functionality with aesthetic appeal.', 'about', 'about_intro', 'Company History', 'Company history text'),
  
  ('what_we_do_title', 'text', 'What We Do', 'about', 'services_title', 'Services Section Title', 'Title for what we do section'),
  ('portfolio_title', 'text', 'Our Work', 'about', 'portfolio_title', 'Portfolio Title', 'Title for portfolio section'),
  ('portfolio_explore_text', 'text', 'Discover our full gallery of projects featuring both high-quality images and behind-the-scenes videos that showcase our attention to detail, creativity, and craftsmanship.', 'about', 'portfolio_description', 'Portfolio Description', 'Portfolio section description'),
  
  ('contact_title', 'text', 'Get In Touch', 'contact', 'contact_title', 'Contact Page Title', 'Main title for contact page'),
  ('contact_description', 'text', 'Ready to transform your space? Contact us today for a consultation.', 'contact', 'contact_description', 'Contact Description', 'Description for contact page'),
  
  ('company_name', 'text', 'MorphicRox', 'global', 'company_info', 'Company Name', 'Company name used throughout the site'),
  ('company_tagline', 'text', 'Premium Ceramic Solutions', 'global', 'company_info', 'Company Tagline', 'Company tagline');

-- Insert sample gallery projects
INSERT INTO public.gallery_projects (title, description, category, image_url, featured, order_index) VALUES
  ('Luxury Hotel Bathroom Suite', 'Complete bathroom renovation for 5-star hotel with premium ceramic fixtures', 'Hospitality', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', true, 1),
  ('Modern Kitchen Transformation', 'Contemporary kitchen design featuring ceramic countertops and backsplash', 'Residential', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80', true, 2),
  ('Office Reception Area', 'Professional ceramic installations for corporate environments', 'Commercial', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', false, 3),
  ('Spa Bathroom Design', 'Luxurious ceramic solutions for wellness spaces', 'Hospitality', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80', false, 4);

-- Insert sample gallery videos
INSERT INTO public.gallery_videos (title, description, video_url, thumbnail_url, featured, order_index) VALUES
  ('Behind the Scenes: Hotel Project', 'See how we transformed this luxury hotel bathroom from start to finish', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80', true, 1),
  ('Kitchen Installation Process', 'Watch our team install ceramic countertops with precision', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80', true, 2),
  ('Quality Control Process', 'Our rigorous quality control ensures perfect results every time', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80', false, 3);

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    'viewer'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update timestamps trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add update triggers to all tables
CREATE TRIGGER update_site_content_updated_at 
  BEFORE UPDATE ON public.site_content 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_gallery_projects_updated_at 
  BEFORE UPDATE ON public.gallery_projects 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_gallery_videos_updated_at 
  BEFORE UPDATE ON public.gallery_videos 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at 
  BEFORE UPDATE ON public.user_profiles 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
