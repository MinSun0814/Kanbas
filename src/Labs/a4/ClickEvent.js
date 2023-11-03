function ClickEvent() {
  const handleClickNoArgument = () => {
    alert("you clicked the button");
  };
  const alertAdd = (a, b) => {
    alert(a + b);
  };
  return (
      <div>
        <h2>Click Event</h2>
        <button onClick={handleClickNoArgument}>
          Click no arguments
        </button>
        <br/>
        <button onClick={() => handleClickNoArgument()}>
          Click no arguments, embedded and parentheses
        </button>
        <br/>
        <button onClick={() => alertAdd(1, 2)}>
          Click Add 1+2, embedded and parentheses
        </button>
        <br/>
        <button
          onClick = {function (){
            alertAdd(1, 2);
          } }> Click add, function
          </button>

      </div>
  );
}

export default ClickEvent;
