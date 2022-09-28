import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../../redux/configStore';
import MissionsContainer from '../MissionsContainer/MissionsContainer';
import fetchMissions, { IS_A_MEMBER, NOT_A_MEMBER } from '../../../redux/missions/missionsApi';
import { getMissions } from '../__mocks__/getMissionsMock';

// I'll keep this comments here because help me a lot
// to test the react with redux we need also import the store and provider like ever
// then in my case I use the asink tunk in the MissionsAPI and if you se
// I use the same async tunk to get the type of the action because we need to
// dispatch the action to the store, in that way the missions can get the data from the store
// you need to create the action.
// firing user events
// https://www.robinwieruch.de/react-testing-library/
// why is better use userEvent instead of fireEvent
// https://blog-es.mimacom.com/react-testing-library-fireevent-vs-userevent/
// is pertty weird if you want to get the element by id you can't with jest library
// but you can do this
// https://bobbyhadz.com/blog/react-testing-library-find-by-classname
//
// get by testId you must add an attribute but only for the elements that will
// have dinamic data in this case the display will have dinamic data
// https://testing-library.com/docs/queries/bytestid/
// this article says that is not so bad and when to use getByTestId
// https://derekndavis.com/posts/getbytestid-overused-react-testing-library
// in your react component you must add <p data-testid="display" className="display">
//
// they say that the best way is getElementByRole or in my case byText for example the
// calculator buttos does not have id they have just text we use text 8 to get the button 8
// but what about if there is another button or component with text 8 is there when it comes
// into play using testID? I could not find a way to get the buttons and then get the button with
// 8 inside in that way you get first all the buttons and not a paragraph for example
// okay yeh I found in the same file that says that in that way we use testID! when we have more
// other elements with maybe the same info
// https://derekndavis.com/posts/getbytestid-overused-react-testing-library
// how to tests lists
// https://derekndavis.com/posts/testing-lists-react-testing-library
// snapShots
// https://jestjs.io/docs/snapshot-testing

describe('Testing missions display', () => {
  it('Testing Against snapShot', async () => {
    const tree = render(
      <Provider store={store}>
        <MissionsContainer />
      </Provider>,
    );

    // taking the screen shot
    expect(tree).toMatchSnapshot();
  });

  it('Testing Mission container with 4 missions We shall have 4 buttons with the text Join Mission', async () => {
    const missions = await getMissions();
    const action = { type: fetchMissions.fulfilled, payload: missions };
    store.dispatch(action);
    render(
      <Provider store={store}>
        <MissionsContainer />
      </Provider>,
    );
    // screen.debug();
    // https://testing-library.com/docs/queries/byrole/
    const buttons = screen.getAllByRole('button');
    const buttonsText = screen.getAllByText('Join Mission');

    // we shall have 4 buttons rendered
    expect(buttons).toHaveLength(4);
    expect(buttonsText).toHaveLength(4);
  });

  it('Testing buttons changing the value from Join Mission to Leave Mission', async () => {
    const missions = await getMissions();
    const action = { type: fetchMissions.fulfilled, payload: missions };
    store.dispatch(action);
    render(
      <Provider store={store}>
        <MissionsContainer />
      </Provider>,
    );

    // screen.debug();
    // get the spans before the clicks they should have "NOT A MEMBER"
    const spansBeforeClicks = screen.getAllByText(NOT_A_MEMBER);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      // dispatch a click for each button
      userEvent.click(button);
    });

    // after having clicked in the four buttons we shall see the text in the span changed
    // from NOT A MEMBER, to ACTIVE MEMBER
    // and also the buttons must have from Join mission change to Leave Mission
    // screen.debug();
    expect(spansBeforeClicks).toHaveLength(4);
    expect(screen.getAllByText(IS_A_MEMBER)).toHaveLength(4);
    expect(screen.getAllByText('Leave Mission')).toHaveLength(4);

    // dispach a click for only one button
    userEvent.click(buttons[0]);
    // screen.debug();
    // there should be only an element with the NOT A MEMEBER and a button with Join Mission
    expect(screen.getAllByText(NOT_A_MEMBER)).toHaveLength(1);
    expect(screen.getAllByText('Join Mission')).toHaveLength(1);
  });
});
