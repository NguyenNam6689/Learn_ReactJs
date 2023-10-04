const data = [
  {
    labe: 'home',
    to: '/',
  },
  {
    labe: 'useEffect',
    to: '/useeffects',
    children: [
      {
        labe: 'learn1',
        to: '/useeffects/learn1',
      },
      {
        labe: 'learn2',
        to: '/useeffects/learn2',
      },
      {
        labe: 'learn_exam',
        to: '/useeffects/learn_exam',
      },
    ],
  },
  {
    labe: 'useState',
    to: '/usestate',
  },
  {
    labe: 'NotFound',
    to: '/*',
  },
];
export default data;
