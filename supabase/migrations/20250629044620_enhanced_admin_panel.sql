-- Enhanced Admin Panel System Migration

-- Create enhanced media_items table for better media management
CREATE TABLE IF NOT EXISTS public.media_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('image', 'video')),
  url TEXT NOT NULL,
  alt_text TEXT,
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  usage_context TEXT, -- hero, card, gallery, background, etc.
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  file_id UUID REFERENCES public.media_files(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Update site_content table to support media references
ALTER TABLE public.site_content 
ADD COLUMN IF NOT EXISTS image_id UUID REFERENCES public.media_items(id) ON DELETE SET NULL,
ADD COLUMN IF NOT EXISTS video_id UUID REFERENCES public.media_items(id) ON DELETE SET NULL;

-- Create page_sections table for organizing content by page and section
CREATE TABLE IF NOT EXISTS public.page_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(page, section)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_media_items_page_section ON public.media_items(page, section);
CREATE INDEX IF NOT EXISTS idx_media_items_type ON public.media_items(type);
CREATE INDEX IF NOT EXISTS idx_media_items_usage_context ON public.media_items(usage_context);
CREATE INDEX IF NOT EXISTS idx_site_content_page ON public.site_content(page);
CREATE INDEX IF NOT EXISTS idx_page_sections_page ON public.page_sections(page);

-- Insert default page sections
INSERT INTO public.page_sections (page, section, title, description, order_index) VALUES
-- Home page sections
('home', 'hero', 'Home Hero Section', 'Main hero section with title, subtitle, and background media', 1),
('home', 'categories', 'Home Categories', 'Category cards for different product types', 2),
('home', 'features', 'Home Features', 'Features section highlighting company benefits', 3),

-- About page sections
('about', 'hero', 'About Hero Section', 'About page hero with title and background', 1),
('about', 'intro', 'About Introduction', 'Company introduction and history', 2),
('about', 'services', 'About Services', 'What we do section', 3),
('about', 'portfolio', 'About Portfolio', 'Portfolio showcase section', 4),

-- Gallery page sections
('gallery', 'hero', 'Gallery Hero Section', 'Gallery page hero section', 1),
('gallery', 'projects', 'Gallery Projects', 'Project showcase section', 2),
('gallery', 'videos', 'Gallery Videos', 'Behind the scenes videos', 3),

-- Products page sections
('products', 'hero', 'Products Hero Section', 'Products page hero section', 1),
('products', 'categories', 'Product Categories', 'Product category listings', 2),

-- Contact page sections
('contact', 'hero', 'Contact Hero Section', 'Contact page hero section', 1),
('contact', 'form', 'Contact Form', 'Contact form section', 2)
ON CONFLICT (page, section) DO NOTHING;

-- Insert default media items for existing pages
INSERT INTO public.media_items (name, type, url, page, section, usage_context, order_index) VALUES
-- Home page media
('Hero Background Video', 'video', 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4', 'home', 'hero', 'background', 1),
('Kitchen Category Image', 'image', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80', 'home', 'categories', 'card', 1),
('Bathroom Category Image', 'image', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80', 'home', 'categories', 'card', 2),
('Office Category Image', 'image', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', 'home', 'categories', 'card', 3),
('Hospitality Category Image', 'image', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80', 'home', 'categories', 'card', 4),

-- About page media
('About Hero Image', 'image', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1600&q=80', 'about', 'hero', 'background', 1),

-- Gallery page media
('Gallery Featured Video 1', 'video', 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4', 'gallery', 'videos', 'featured', 1),
('Gallery Featured Video 2', 'video', 'https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4', 'gallery', 'videos', 'featured', 2)
ON CONFLICT DO NOTHING;

-- Insert enhanced site content with proper structure
INSERT INTO public.site_content (key, page, section, type, title, description, value) VALUES
-- Home page content
('hero_title', 'home', 'hero', 'text', 'Hero Title', 'Main title on homepage hero section', 'Transform Your Space with Premium Countertops'),
('hero_subtitle', 'home', 'hero', 'text', 'Hero Subtitle', 'Subtitle on homepage hero section', 'Discover Our Premium Collection'),
('hero_description', 'home', 'hero', 'text', 'Hero Description', 'Description text on homepage hero section', 'From elegant kitchens to luxurious bathrooms, we bring your vision to life with exceptional quality and craftsmanship.'),

-- Home categories content
('kitchen_category_title', 'home', 'categories', 'text', 'Kitchen Category Title', 'Title for kitchen category card', 'Kitchens'),
('kitchen_category_description', 'home', 'categories', 'text', 'Kitchen Category Description', 'Description for kitchen category card', 'Elegant kitchen countertops that combine beauty with functionality'),
('bathroom_category_title', 'home', 'categories', 'text', 'Bathroom Category Title', 'Title for bathroom category card', 'Bathrooms'),
('bathroom_category_description', 'home', 'categories', 'text', 'Bathroom Category Description', 'Description for bathroom category card', 'Luxurious bathroom surfaces for your perfect retreat'),
('office_category_title', 'home', 'categories', 'text', 'Office Category Title', 'Title for office category card', 'Office'),
('office_category_description', 'home', 'categories', 'text', 'Office Category Description', 'Description for office category card', 'Professional workspace solutions that inspire productivity'),
('hospitality_category_title', 'home', 'categories', 'text', 'Hospitality Category Title', 'Title for hospitality category card', 'Hospitality'),
('hospitality_category_description', 'home', 'categories', 'text', 'Hospitality Category Description', 'Description for hospitality category card', 'Commercial-grade surfaces for hotels and restaurants'),

-- About page content
('about_hero_title', 'about', 'hero', 'text', 'About Hero Title', 'Main title on about page hero section', 'About Our Company'),
('about_hero_description', 'about', 'hero', 'text', 'About Hero Description', 'Description on about page hero section', 'Learn about our commitment to quality and craftsmanship'),
('about_intro_title', 'about', 'intro', 'text', 'About Intro Title', 'Title for about introduction section', 'Know About Us'),
('about_intro_description', 'about', 'intro', 'text', 'About Intro Description', 'Description for about introduction section', 'With years of expertise in the industry, we specialize in providing high-quality bathroom furniture, kitchen solutions, office installations, and hospitality fixtures that combine functionality with aesthetic appeal.'),

-- Gallery page content
('gallery_title', 'gallery', 'hero', 'text', 'Gallery Title', 'Main title on gallery page', 'Our Gallery'),
('gallery_description', 'gallery', 'hero', 'text', 'Gallery Description', 'Description on gallery page', 'Explore our portfolio of completed projects and behind-the-scenes videos'),

-- Products page content
('products_title', 'products', 'hero', 'text', 'Products Title', 'Main title on products page', 'Our Products'),
('products_description', 'products', 'hero', 'text', 'Products Description', 'Description on products page', 'Discover our comprehensive range of premium ceramic products'),

-- Contact page content
('contact_title', 'contact', 'hero', 'text', 'Contact Title', 'Main title on contact page', 'Get In Touch'),
('contact_description', 'contact', 'hero', 'text', 'Contact Description', 'Description on contact page', 'Ready to transform your space? Contact us today for a consultation.')
ON CONFLICT (key, page) DO NOTHING;

-- Create trigger to update updated_at timestamp for media_items
CREATE OR REPLACE FUNCTION update_media_items_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop trigger if it exists, then recreate it
DROP TRIGGER IF EXISTS update_media_items_updated_at ON public.media_items;
CREATE TRIGGER update_media_items_updated_at 
  BEFORE UPDATE ON public.media_items 
  FOR EACH ROW EXECUTE PROCEDURE update_media_items_updated_at();

-- Create trigger for page_sections
CREATE OR REPLACE FUNCTION update_page_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_page_sections_updated_at ON public.page_sections;
CREATE TRIGGER update_page_sections_updated_at 
  BEFORE UPDATE ON public.page_sections 
  FOR EACH ROW EXECUTE PROCEDURE update_page_sections_updated_at();

-- Enable RLS on new tables
ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;

-- RLS Policies for new tables
CREATE POLICY "Public can read media items" ON public.media_items FOR SELECT USING (true);
CREATE POLICY "Public can read page sections" ON public.page_sections FOR SELECT USING (true);

CREATE POLICY "Admins can manage media items" ON public.media_items 
  FOR ALL USING (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Admins can manage page sections" ON public.page_sections 
  FOR ALL USING (public.is_admin_or_editor(auth.uid()));

-- Create function to get page content with media
CREATE OR REPLACE FUNCTION get_page_content_with_media(page_name TEXT)
RETURNS TABLE (
  key TEXT,
  type TEXT,
  value TEXT,
  section TEXT,
  title TEXT,
  description TEXT,
  image_url TEXT,
  video_url TEXT,
  image_alt TEXT,
  video_alt TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    sc.key,
    sc.type::TEXT,
    sc.value,
    sc.section::TEXT,
    sc.title,
    sc.description,
    img.url as image_url,
    vid.url as video_url,
    img.alt_text as image_alt,
    vid.alt_text as video_alt
  FROM public.site_content sc
  LEFT JOIN public.media_items img ON sc.image_id = img.id AND img.type = 'image'
  LEFT JOIN public.media_items vid ON sc.video_id = vid.id AND vid.type = 'video'
  WHERE sc.page = page_name
  ORDER BY sc.section, sc.key;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to get media by page and section
CREATE OR REPLACE FUNCTION get_media_by_page_section(page_name TEXT, section_name TEXT)
RETURNS TABLE (
  id UUID,
  name TEXT,
  type TEXT,
  url TEXT,
  alt_text TEXT,
  usage_context TEXT,
  order_index INTEGER,
  is_active BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    mi.id,
    mi.name,
    mi.type,
    mi.url,
    mi.alt_text,
    mi.usage_context,
    mi.order_index,
    mi.is_active
  FROM public.media_items mi
  WHERE mi.page = page_name 
    AND mi.section = section_name
    AND mi.is_active = true
  ORDER BY mi.order_index, mi.name;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 