package org.tron.p2p.connection.message.chain;

import org.tron.p2p.connection.message.Message;
import org.tron.p2p.connection.message.MessageType;

public class EthereumMessage extends Message {


    public EthereumMessage(MessageType type, byte[] data) {
        super(type, data);
    }

    @Override
    public boolean valid() {
        return false;
    }
}
