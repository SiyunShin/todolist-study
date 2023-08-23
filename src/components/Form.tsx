type Props = {
  inputText: string;
  handleInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitTodo: React.FormEventHandler<HTMLFormElement>;
};
const Form = ({ inputText, handleInputText, onSubmitTodo }: Props) => {
  return (
    <form onSubmit={onSubmitTodo}>
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
