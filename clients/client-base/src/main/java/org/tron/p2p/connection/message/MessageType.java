package org.tron.p2p.connection.message;

import java.util.HashMap;
import java.util.Map;

public enum MessageType {

  KEEP_ALIVE_PING((byte) 0xff),

  KEEP_ALIVE_PONG((byte) 0xfe),

  HANDSHAKE_HELLO((byte) 0xfd),

  STATUS((byte) 0xfc),

  DISCONNECT((byte) 0xfb),

  UNKNOWN((byte) 0x80),

  ETH_CHECK_STATE((byte)0x20), ETH_INBOUND_PUSH((byte)0x21), ETH_INBOUND_PULL((byte)0x22), ETH_OUTBOUND_PUSH((byte)0x23), ETH_OUTBOUND_PULL((byte)0x24);

  private final byte type;

  MessageType(byte type) {
    this.type = type;
  }

  public byte getType() {
    return type;
  }

  private static final Map<Byte, MessageType> map = new HashMap<>();

  static {
    for (MessageType value : values()) {
      map.put(value.type, value);
    }
  }
  public static MessageType fromByte(byte type) {
    MessageType typeEnum = map.get(type);
    return typeEnum == null ? UNKNOWN : typeEnum;
  }
}
