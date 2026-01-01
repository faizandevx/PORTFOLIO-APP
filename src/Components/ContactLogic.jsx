import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const ContactContext = createContext();

export function ContactProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const addMessage = (msg) => {
        const newMessage = {id: Date.now(),...msg,};
        setMessages((prev) => [...prev, newMessage]);
        toast.success("Message Added!");
    };
    const deleteMessage = (id) => {
        setMessages((prev) => prev.filter((m) => m.id !== id));
        toast.error("Message Deleted!");
    };
    return (
        <ContactContext.Provider value={{ messages, addMessage, deleteMessage }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContactLogic() {
    return useContext(ContactContext);
}
