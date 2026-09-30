import { Camera, Code2, Mic2, PenTool } from 'lucide-react'

export const programs = [
  { code: 'VOE–01', title: 'Campus Stories', label: 'Editorial + audio', icon: Mic2, description: 'Interviews, podcasts and field notes that capture what Easwari really sounds like.', color: 'acid' },
  { code: 'VOE–02', title: 'Visual Lab', label: 'Design + film', icon: Camera, description: 'Posters, short films, photo essays and moving identities made for the campus.', color: 'violet' },
  { code: 'VOE–03', title: 'Build Room', label: 'Tech + experiments', icon: Code2, description: 'Tiny digital tools, creative code and prototypes that make student life better.', color: 'gold' },
  { code: 'VOE–04', title: 'Open Stage', label: 'Performance + expression', icon: PenTool, description: 'Spoken word, debates and raw ideas—practised together and presented without fear.', color: 'paper' },
]

export const events = [
  { number: '001', type: 'Open Mic', title: 'Unmute', description: 'Five minutes. One stage. Any story worth hearing.', status: 'Next transmission' },
  { number: '002', type: 'Workshop', title: 'Make It Move', description: 'A fast visual storytelling lab for reels, films and motion posters.', status: 'Season 01' },
  { number: '003', type: 'Conversation', title: 'Beyond the Brief', description: 'Creative alumni talk honestly about work, doubt and finding a voice.', status: 'Season 01' },
]

export const leadership = [
  { role: 'Faculty in-charge', name: 'Anandhi', department: 'EEC' },
  { role: 'President', name: 'Gurusamy', department: 'ECE' },
  { role: 'Vice president', name: 'Sai Nandhitha', department: 'CSE' },
]

export const crews = [
  { name: 'Content', leads: 'Sai Sivani K', members: 'Raagini · Kanika · Thiviya · Sambhavi · Mitra · Praveena' },
  { name: 'Direction & Editing', leads: 'Harish Balaji · Raghav G S', members: 'Nitheesh · Aishwarya · Hariharan · Sathvika · Pranavi · Sahana · Ferinand' },
  { name: 'Campus Outreach', leads: 'Prathyum S · Pritika KK', members: 'Priyavagulaa · Aparajitha · Nitish Kumar · Rubinaath · Jai Harini · Akshaya' },
  { name: 'Event Management', leads: 'Lenya', members: 'Ananya · Sujita · Harini · Priyanka · Raghul' },
  { name: 'Technical', leads: 'Rehan J', members: 'Ranjithan · Rohith · Mohith Dharshan · Sahhana · Pranitha' },
]

