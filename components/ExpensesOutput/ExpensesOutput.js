import { Text, View, FlatList, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "a pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    title: "a pair of socks",
    amount: 19.99,
    date: new Date("2022-01-06"),
  },
  {
    id: "e3",
    title: "a book",
    amount: 40.99,
    date: new Date("2022-02-27"),
  },
  {
    id: "e4",
    title: "a dictionary",
    amount: 40.99,
    date: new Date("2023-08-25"),
  },
  {
    id: "e5",
    title: "a spatula",
    amount: 40.99,
    date: new Date("2023-08-23"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    borderRadius: 6,
    flex: 1,
  },
});
