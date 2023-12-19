import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = ()=>{
    const chatProps = useMultiChatLogic(
        '7d0e011f-0858-4e2b-a6ed-0c49880aadcc', 
        props.user.username, 
        props.user.secret
    );
    return(
        <div style={ {height: '100vh'}}>
            <MultiChatSocket{...chatProps}/>
            <MultiChatWindow{...chatProps} style ={{height: '100%'}}/>

        </div>
    )
}

export default ChatsPage

