// ============================================
// NegotiatorIQ — Supabase client
//
// Separate, dedicated Supabase project from HomeAccessIQ's —
// intentional, since NegotiatorIQ's access model (time-boxed
// client accounts via authorized_users) is a different shape
// than HomeAccessIQ's single-permanent-agent design.
//
// Replace the placeholders below with NegotiatorIQ project's own
// values from Project Settings > API.
// ============================================

const SUPABASE_URL = 'https://fqnlulpxxcitlrsurkyq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxbmx1bHB4eGNpdGxyc3Vya3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMDk2MjMsImV4cCI6MjEwMTc4NTYyM30.86VZJx1iOJRIpfXB4gm6rVXHlcy565smq1O-adGj818';

export const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
