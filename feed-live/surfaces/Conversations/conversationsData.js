export const conversations = [
  {
    id: 1,
    name: 'Jakob Curtis',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    lastMessage: "Hey, how's it going?",
    time: '2 min ago',
    unread: 2,
  },
  {
    id: 2,
    name: 'Charlie Kelly',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    lastMessage: 'Yo, are you going to the wedding?',
    time: '10 min ago',
    unread: 0,
  },
  {
    id: 3,
    name: 'Minna Amigon',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    lastMessage: "seriously! i'm not even playing!",
    time: '1 hour ago',
    unread: 1,
  },
  {
    id: 4,
    name: 'Donette Foller',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    lastMessage: 'and then guess what happened. he started crying...!',
    time: '2 hours ago',
    unread: 0,
  },
];

export const messagesByConversation = {
  1: [
    { id: 1, type: 'from', text: "Hey! Comment ça va?", time: '10:00' },
    { id: 2, type: 'to', text: "Salut! Ça va bien et toi?", time: '10:02' },
    { id: 3, type: 'from', text: "Incroyable ta performance au tennis hier", time: '10:05' },
    { id: 4, type: 'to', text: "Merci beaucoup! J'ai bien joué effectivement", time: '10:07' },
    { id: 5, type: 'from', text: "On se fait un match ce weekend?", time: '10:10' },
    { id: 6, type: 'to', text: "Avec plaisir! Samedi après-midi?", time: '10:12' },
  ],
  2: [
    { id: 1, type: 'from', text: "Tu vas au mariage de Sophie?", time: '09:30' },
    { id: 2, type: 'to', text: "Oui bien sûr! Et toi?", time: '09:35' },
    { id: 3, type: 'from', text: "Yo, are you going to the wedding?", time: '09:40' },
  ],
  3: [
    { id: 1, type: 'from', text: "T'as vu le match hier soir?", time: '20:00' },
    { id: 2, type: 'to', text: "Non j'ai raté! C'était bien?", time: '20:15' },
    { id: 3, type: 'from', text: "seriously! i'm not even playing!", time: '20:20' },
    { id: 4, type: 'from', text: "C'était incroyable!", time: '20:21' },
  ],
  4: [
    { id: 1, type: 'from', text: "Tu ne devineras jamais ce qui s'est passé", time: '14:00' },
    { id: 2, type: 'to', text: "Quoi donc?", time: '14:05' },
    { id: 3, type: 'from', text: "and then guess what happened. he started crying...!", time: '14:10' },
  ],
};