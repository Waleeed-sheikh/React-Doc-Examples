import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import TaskApp from "./DescribingTheUiExample-8th-may/TaskApp";
import EmojiFeedbackPanel from "./AddingInterActivityExamples-8th-may/EmojiExample-8th-may/EmojiPanel";
import BookVotingShelf from "./AddingInterActivityExamples-8th-may/BookVoteExample-8th-may/BookShelf";
import TaskAppReducer from "./ManagingStateExample-9th-may/TaskAppReducer";
import AdvancedCounter from "./ManagingStateExample-9th-may/AdvancedCounterReducer";
import MainApp from "./RTK-Example-10th-May/NotificationExample/MainApp";
import { Mystore } from "./RTK-Example-10th-May/NotificationExample/Store";
import ReacQuery from "./ReactQuery-Example-10th-may/simpleFetchExample";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BookVotingShelf />
  </StrictMode>
);

//1:43 pe 96%
