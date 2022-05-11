import reducer from './rockets';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([]);
});
it('should handle GET_ROCKETS', () => {
  expect(
    reducer([], {
      type: 'spaceTravel/rockets/GET_ROCKETS',
      payload: [
        {
          rocket_id: 1,
          name: 'test',
        },
      ],
    }),
  ).toEqual([
    {
      rocket_id: 1,
      name: 'test',
      reserve: false,
    },
  ]);
});
it('should handle RESERVE_ROCKET', () => {
  expect(
    reducer(
      [
        {
          id: 1,
          name: 'test',
          reserve: false,
        },
      ],
      {
        type: 'RESERVE_ROCKET',
        payload: {
          id: 1,
        },
      },
    ),
  ).toEqual([
    {
      id: 1,
      name: 'test',
      reserve: true,
    },
  ]);
});
it('should handle REMOVE_ROCKET', () => {
  expect(
    reducer(
      [
        {
          id: 1,
          name: 'test',
          reserve: true,
        },
      ],
      {
        type: 'REMOVE_ROCKET',
        payload: {
          id: 1,
        },
      },
    ),
  ).toEqual([
    {
      id: 1,
      name: 'test',
      reserve: false,
    },
  ]);
});
