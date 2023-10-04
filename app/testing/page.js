const Test = ({detail}) => {
    return (
      <>
        hai
        <div style={{color:"red"}}>
          {detail.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      </>
    );
  };
  
  export default Test;
  
  const test = {name:"sharmina",}