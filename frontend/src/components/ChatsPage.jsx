import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage=(props)=>{
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="45156ddd-1445-4d7f-b7bd-886f344ff654"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  )
}
export default ChatsPage;
