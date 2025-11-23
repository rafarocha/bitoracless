package org.tron.p2p.connection.business.chains;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.concurrent.BasicThreadFactory;
import org.tron.p2p.connection.Channel;
import org.tron.p2p.connection.ChannelManager;
import org.tron.p2p.connection.business.MessageProcess;
import org.tron.p2p.connection.message.Message;
import org.tron.p2p.connection.message.chain.EthereumMessage;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.RawTransactionManager;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.core.methods.response.EthSendTransaction;

import java.math.BigInteger;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Slf4j(topic = "eth")
public class EthereumService implements MessageProcess {

    private final ScheduledExecutorService executor;
    private final Web3j web3jClient;
    private final RawTransactionManager transactionManager;

    private static final String ETHEREUM_RPC_URL = "https://sepolia.infura.io/v3/YOUR_RPC_KEY";

    private static final String SENDER_PRIVATE_KEY = "0xSENDER_PRIVATE_KEY";
    private static final String ORACLE_CONTRACT_ADDRESS = "0xORACLE_CONTRACT_ADDRESS";

    public EthereumService() {
        this.executor = Executors.newSingleThreadScheduledExecutor(
                BasicThreadFactory.builder().namingPattern("chain-eth").build());

        this.web3jClient = Web3j.build(new HttpService(ETHEREUM_RPC_URL));
        this.transactionManager = new RawTransactionManager(
                web3jClient,
                Credentials.create(SENDER_PRIVATE_KEY)
        );

        System.out.println("🔗 EthereumService: Conectado ao RPC em: " + ETHEREUM_RPC_URL);
    }

    public void init() {
        executor.scheduleWithFixedDelay(() -> {
            try {
                ChannelManager.getChannels().values().stream()
                        .filter(p -> !p.isDisconnect() && p.isFinishHandshake() && p.getChainId() == ETHEREUM)
                        .forEach(p -> {
                            try {
                                p.send(new EthereumMessage());
                            } catch (Exception e) {
                                log.error("Erro ao enviar keep alive Ethereum", e);
                            }
                        });
            } catch (Exception t) {
                log.error("Exceção na tarefa de keep alive do EthereumService", t);
            }
        }, 5, 5, TimeUnit.SECONDS); // Executa a cada 5 segundos
    }

    public String settleData(String contractAddress, byte[] finalOracleData) throws Exception {

        String encodedFunction = "0x..."; // ABI-Encoded call

        BigInteger gasLimit = BigInteger.valueOf(300000);

        EthSendTransaction ethSendTransaction = transactionManager.sendTransaction(
                null,
                gasLimit,
                contractAddress,
                encodedFunction,
                BigInteger.ZERO
        ).send();

        if (ethSendTransaction.hasError()) {
            throw new RuntimeException("Falha Ethereum: " + ethSendTransaction.getError().getMessage());
        }

        String txHash = ethSendTransaction.getTransactionHash();
        log.info("Ethereum MSG enviadi > hash: {}", txHash);
        return txHash;
    }

    @Override
    public void processMessage(Channel channel, Message message) {
        switch (message.getType()) {
            case ETH_CHECK_STATE:
                log.info("Check ethereum state, channel {} and msg {}", channel, message);
                break;
            case ETH_INBOUND_PUSH:
            case ETH_INBOUND_PULL:
            case ETH_OUTBOUND_PUSH:
            case ETH_OUTBOUND_PULL:
                break;

            default:
                break;
        }
    }

    public void close() {
        executor.shutdown();
    }
}