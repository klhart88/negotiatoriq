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

const SUPABASE_URL = 'https://hadlrfksquraiopbqwjw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZGxyZmtzcXVyYWlvcGJxd2p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMjg1NDksImV4cCI6MjEwMTcwNDU0OX0.eUIxe8i7JwBRiBXAVtiuaqFwa__l4a270vygHP-gbQY';

export const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
