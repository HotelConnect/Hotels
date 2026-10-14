export const INITIAL_USER = {
  name: 'Noha',
  role: 'Retailer / Travel Agent', // or 'Hotel Agent / Manager'
  roleType: 'retailer', // 'retailer' | 'hotel'
  title: 'Travel Agent',
  company: 'Your travel agency',
  location: '',
  email: 'nohaomar55@gmail.com',
  phone: '',
  shareContact: false,
  dealsCount: 0,
};

export const INITIAL_POSTS = [
  {
    id: 1,
    author: 'Amina Rahal',
    company: 'Atlas Travel',
    role: 'Travel agency',
    roleType: 'retailer',
    time: '5h ago',
    type: 'RFQ',
    content: 'Looking for a reliable hotel partner for a corporate group in Hurghada. We need 20 twin rooms on half board, with a meeting room for one afternoon. Please share your best group rate and cancellation terms.',
    location: 'Hurghada',
    rooms: '20 rooms',
    dates: '4 Nov – 8 Nov',
    likes: 12,
    comments: 2,
    userLiked: false,
  },
  {
    id: 2,
    author: 'Sara Mansour',
    company: 'The Cove Resort',
    role: 'Hotel',
    roleType: 'hotel',
    avatar: 'SM',
    time: '6h ago',
    type: 'HOTEL_UPDATE',
    content: "Planning your next Red Sea group trip? Our renovated family rooms and dedicated group desk are ready for the autumn season. Let's discuss agency allotments and flexible meal plans.",
    location: 'Sharm El Sheikh',
    likes: 8,
    comments: 1,
    userLiked: false,
  },
  {
    id: 3,
    author: 'Daniel Chen',
    company: 'Onda City Hotel',
    role: 'Hotel',
    roleType: 'hotel',
    avatar: 'DC',
    time: '9h ago',
    type: 'HOTEL_UPDATE',
    content: 'Special autumn package for corporate travelers available starting next month. Premium business lounges and high-speed Wi-Fi included.',
    location: 'Cairo',
    likes: 5,
    comments: 0,
    userLiked: false,
  }
];

export const INITIAL_CONVERSATIONS = [
  {
    id: 'sara-mansour',
    contactName: 'Sara Mansour',
    company: 'The Cove Resort',
    avatar: 'SM',
    status: 'New opportunity',
    relatedPostTitle: 'Sharm El Sheikh · Hotel update',
    messages: [], // Array of { id, text, time, isUser }
  }
];

export const INITIAL_EVENTS = [
  {
    id: 1,
    title: 'Hospitality Partners Forum',
    category: 'PARTNERSHIPS',
    badge: 'COMING UP NEXT',
    dateBadge: { month: 'OCT', day: '14' },
    dateString: '14–15 October 2026',
    location: 'Dubai',
    venue: 'Harbour Convention Centre, Dubai',
    organizer: 'Hospitality Exchange',
    description: 'Meet hotel commercial teams and travel agencies to discuss group accommodation, regional demand, and long-term partnerships.',
    agenda: [
      { time: '09:30', title: 'Welcome & industry introductions', room: 'Main hall' },
      { time: '10:30', title: 'Group travel & hotel distribution', room: 'Conference room A' },
      { time: '12:00', title: 'Hotel–agency networking conversations', room: 'Partner lounge' },
      { time: '14:00', title: 'Building long-term commercial partnerships', room: 'Main hall' },
    ],
    attendees: [
      { name: 'Marcus Lee', role: 'Hotel Sales Manager · North & Palm Hotel', location: 'Hurghada, Egypt', avatar: 'ML' },
      { name: 'Lena Costa', role: 'Group Travel Consultant · Horizon Journeys', location: 'Alexandria, Egypt', avatar: 'LC' },
      { name: 'Omar Hassan', role: 'Agency Director · Nile Gate Travel', location: 'Cairo, Egypt', avatar: 'OH' },
      { name: 'Sara Mansour', role: 'Commercial Manager · The Cove Resort', location: 'Sharm El Sheikh, Egypt', avatar: 'SM' },
    ]
  },
  {
    id: 2,
    title: 'Guest Experience Exchange',
    category: 'GUEST EXPERIENCE',
    badge: 'COMING UP NEXT',
    dateBadge: { month: 'NOV', day: '06' },
    dateString: '6 November 2026',
    location: 'Cairo',
    venue: 'Grand Palace Hotel, Cairo',
    organizer: 'Middle East Hospitality Network',
    description: 'Explore innovations in guest retention and boutique agency partnerships across regional destinations.',
    agenda: [
      { time: '10:00', title: 'Opening Keynote', room: 'Grand Ballroom' },
      { time: '11:30', title: 'Digital Transformation in Hospitality', room: 'Room B' },
    ],
    attendees: [
      { name: 'Omar Hassan', role: 'Agency Director · Nile Gate Travel', location: 'Cairo, Egypt', avatar: 'OH' },
      { name: 'Sara Mansour', role: 'Commercial Manager · The Cove Resort', location: 'Sharm El Sheikh, Egypt', avatar: 'SM' },
    ]
  }
];