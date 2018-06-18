import * as R from 'ramda';

export const objAction = R.curry((type, payload) => ({ type, payload }));

const checkType = (actionType, type) =>
  R.cond([
    [R.is(String), R.equals(type)],
    [R.is(Array), R.contains(type)],
    [
      R.is(Object),
      R.compose(
        R.contains(type),
        R.values
      ),
    ],
    [
      R.T,
      () => {
        throw new Error(
          `Current type of actionType is ${R.type(
            actionType
          )}, correct type: String or Array.`
        );
      },
    ],
  ])(actionType);

export const reducerCreator = (actionType, initialState) => (
  state = initialState,
  { type, payload }
) =>
  payload && checkType(actionType, type)
    ? R.mergeDeepRight(state, payload)
    : state;
