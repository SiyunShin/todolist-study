type Props = {
  inputText: string;
  handleInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitTodo: React.FormEventHandler<HTMLFormElement>;
};
const Form = ({ inputText, handleInputText, handleSubmitTodo }: Props) => {
  return (
    <form onSubmit={handleSubmitTodo}>
      <input
        type="text"
        placeholder="할 일을 입력 해주세요."
        onChange={handleInputText}
        value={inputText}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default Form;
