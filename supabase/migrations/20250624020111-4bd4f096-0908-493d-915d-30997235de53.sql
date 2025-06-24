
-- Update all existing users to have admin role
UPDATE public.user_profiles SET role = 'admin' WHERE role IS NULL OR role = 'viewer';

-- If there are users in auth.users but not in user_profiles, insert them with admin role
INSERT INTO public.user_profiles (id, email, full_name, role)
SELECT 
  au.id,
  au.email,
  au.raw_user_meta_data->>'full_name',
  'admin'::user_role
FROM auth.users au
LEFT JOIN public.user_profiles up ON au.id = up.id
WHERE up.id IS NULL;
