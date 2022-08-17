
function Marvel(props) {
    return (
          <>
        <img className="marvel-img" src={props.img}></img>
                <div>Имя : {props.nickname}</div>
                <div>Вселенная : {props.universe}</div>
                <div>Альтер эго : {props.alterego}</div>
                <div>Род деятельности : {props.activity}</div>
                <div>Друзья : {props.friends}</div>
                <div>Суперсилы : {props.superpowers}</div>
            </>
       
   
    );
}

export default Marvel;
