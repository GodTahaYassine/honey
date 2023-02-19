
// ActionProvider starter code
class ActionProvider {
 
  // The actnumberion provider receives createChatBotMessage which you can use to define the bots response, and 
  // the setState function that allows for manipulating the bots internal state.
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage
  }
hellohandel =()=>{
const message = this.createChatBotMessage("Hi ! How can I help you today ? ")
this.setChatbotMessage(message)  
}

whohandel =()=>{
  const message = this.createChatBotMessage("Hi ! I'm BeeBot , I am here to help you know more about bees and ways to protect your bee colonies ")
this.setChatbotMessage(message)  
}

protecthandel =()=>{
  const message = this.createChatBotMessage("Preventing hornet attacks on bees is important for the survival of bee colonies. Here are some tips on how to do so without harming the hornets or the bees:")

this.setChatbotMessage(message)  

}
tiphandel =()=> {
   const message= this.createChatBotMessage("Install a physical barrier: You can install a mesh or netting over the entrance of the beehive that is small enough to prevent hornets from entering, but large enough to allow bees to come and go freely.")
   this.setChatbotMessage(message)
}
morehandel =()=> {
  const message = this.createChatBotMessage("Use decoys: Hornets are territorial and will avoid areas where other hornets are present. You can make a decoy by filling a paper bag with crumpled newspaper and hanging it near the hive.")
    this.setChatbotMessage(message)
}

morerhandel =()=> {
    const message = this.createChatBotMessage("Provide extra protection: You can also use a hornet trap or lure to keep the hornets away from the beehive.")
    this.setChatbotMessage(message)
}

  setChatbotMessage = (message) => {
  this.setState(state =>({ ... state, messages: [...state.messages, message] }))
 }
}
 export default ActionProvider;