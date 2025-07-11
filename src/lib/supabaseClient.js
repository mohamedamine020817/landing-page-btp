import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://barhgnhurkzeagtaoydu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcmhnbmh1cmt6ZWFndGFveWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxODc4NDQsImV4cCI6MjA2Nzc2Mzg0NH0.Zav_sIeH9SPG9FwCxQ2zTtNc71Ct34fdfwo_I7fuLxU'
export const supabase = createClient(supabaseUrl, supabaseKey)