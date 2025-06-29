-- Add new enum values for page sections (split migration)
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'categories';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'videos';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'media';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'hero_image';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'hero_video';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'card_image';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'background_image';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'featured_image';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'hero';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'intro';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'services';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'portfolio';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'projects';
ALTER TYPE public.page_section ADD VALUE IF NOT EXISTS 'form'; 