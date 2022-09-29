/* eslint-disable */
const getMissions = () => {
  return Promise.resolve([
      {
        name: 'Test 1',
        description: 'mision1',
        status: 'NOT A MEMBER',
        id:'test1'
      },
      {
        name: 'Test 2',
        description: 'mision2',
        status: 'NOT A MEMBER',
        id:'test2'
      },
      {
        name: 'Test 3',
        description: 'mision3',
        status: 'NOT A MEMBER',
        id:'test3'
      },
      {
        name: 'Test 4',
        description: 'mision4',
        status: 'NOT A MEMBER',
        id:'test4'
      },
   ]);
};

export { getMissions };
