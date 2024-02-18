const ChatModel = require("../models/ChatModel");
const Message = require("../models/Message");
const User = require("../models/User");

module.exports.SendMessage = async (req, res, next) => {
    try {
        const { id:ReceiverId } = req.params;
        const SenderId = req.user._id;
        const { message } = req.body;
    
        const checkReceiverUser = await User.findById(ReceiverId)
        if(!checkReceiverUser) {
            return res.json({
                success: false,
                message: "Nepostojeci primalac poruke"
            })
        }
    
        const checkSenderUser = await User.findById(SenderId)
        if(!checkSenderUser) {
            return res.json({
                success: false,
                message: "Nepostojeci posiljalac poruke"
            })
        }
    
        let conversation = await ChatModel.findOne({
            Participints: { $all: [SenderId, ReceiverId] }
        })
    
        if(!conversation) {
            conversation = await ChatModel.create({
                Participints: [SenderId, ReceiverId]
            })
        }
    
        const newMessage = new Message({
            SenderId, ReceiverId, Message:message
        })
        
        conversation.Messages.push(newMessage._id)
    
        await newMessage.save()
        await conversation.save()
        res.json({
            success: true,
            newMessage
        }) 
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}

module.exports.GetConversation = async (req, res, next) => {

    const SenderId = req.user._id;
    const {id:ThePersonImChattingWith} = req.params;

    try {   
        const checkReceiverUser = await User.findById(ThePersonImChattingWith)
        if(!checkReceiverUser) {
            return res.json({
                success: false,
                message: "Nepostojeci primalac poruke"
            })
        }
    
        const checkSenderUser = await User.findById(SenderId)
        if(!checkSenderUser) {
            return res.json({
                success: false,
                message: "Nepostojeci posiljalac poruke"
            })
        } 

        const Conversation = await ChatModel.findOne({
            Participints: { $all: [SenderId, ThePersonImChattingWith] }
        }).populate("Messages")

        if(!Conversation) {
            return res.json({
                success: true,
                message: "Zapocni razgovor. Cet je prazan"
            })
        }

        return res.json({
            success: true,
            Conversation
        })

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}