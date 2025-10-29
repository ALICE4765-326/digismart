/*
  # Initial Schema Setup

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table if it doesn't exist
DO $$ BEGIN
  CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email text UNIQUE NOT NULL,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
  );
EXCEPTION
  WHEN duplicate_table THEN
    NULL;
END $$;

-- Create contacts table if it doesn't exist
DO $$ BEGIN
  CREATE TABLE IF NOT EXISTS contacts (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    created_at timestamptz DEFAULT now(),
    status text DEFAULT 'pending'
  );
EXCEPTION
  WHEN duplicate_table THEN
    NULL;
END $$;

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies if they don't exist
DO $$ BEGIN
  DROP POLICY IF EXISTS "Users can read own data" ON users;
  CREATE POLICY "Users can read own data"
    ON users
    FOR SELECT
    TO authenticated
    USING (auth.uid() = id);
EXCEPTION
  WHEN undefined_object THEN
    NULL;
END $$;

DO $$ BEGIN
  DROP POLICY IF EXISTS "Anyone can create contact submissions" ON contacts;
  CREATE POLICY "Anyone can create contact submissions"
    ON contacts
    FOR INSERT
    TO anon
    WITH CHECK (true);
EXCEPTION
  WHEN undefined_object THEN
    NULL;
END $$;

DO $$ BEGIN
  DROP POLICY IF EXISTS "Admins can read all contacts" ON contacts;
  CREATE POLICY "Admins can read all contacts"
    ON contacts
    FOR SELECT
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');
EXCEPTION
  WHEN undefined_object THEN
    NULL;
END $$;