import reducer from './missions';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([]);
});
it('should handle GET_MISSIONS', () => {
  expect(
    reducer([], {
      type: 'GET_MISSIONS',
      payload: [
        {
          mission_id: 1,
          name: 'test',
          join: false,
        },
      ],
    }),
  ).toEqual([
    {
      mission_id: 1,
      name: 'test',
      join: false,
    },
  ]);
});
it('should handle JOIN_MISSION', () => {
  expect(
    reducer(
      [
        {
          mission_id: 1,
          name: 'test',
          join: false,
        },
      ],
      {
        type: 'JOIN_MISSION',
        payload: {
          id: 1,
        },
      },
    ),
  ).toEqual([
    {
      mission_id: 1,
      name: 'test',
      join: true,
    },
  ]);
});
it('should handle LEAVE_MISSION', () => {
  expect(
    reducer(
      [
        {
          mission_id: 1,
          name: 'test',
          join: true,
        },
      ],
      {
        type: 'LEAVE_MISSION',
        payload: {
          id: 1,
        },
      },
    ),
  ).toEqual([
    {
      mission_id: 1,
      name: 'test',
      join: false,
    },
  ]);
});
