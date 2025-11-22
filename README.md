# Pitch Elevator [🪜](https://emojipedia.org/ladder)

- `Bitoracless` allows you the `freedom` to run trustless off-chain clients, whenever and however you want, on any device to retrieve data and process anything, just like a BitTorrent client.

# Problem 🚨

- The oracle problem persists even with current solutions because it reintroduces dependence on the use of wallets, proprietary tokens, and oracle servers, without freedom over when and how to use them, in addition to a lack of algorithmic transparency, privacy, and latency.
- This is about freedom of computing, sovereignty, even in limited environments, token free will, algorithmic transparency, and privacy in data use. This is about a paradox, a dilemma known as the oracle problem.

- # Inception 🎩

![image.png](attachment:c6a3adf3-6ca8-4d05-823d-39ce4923333a:image.png)

# Context 🤔

- The systematic literature review I am conducting, as [referenced below](https://www.notion.so/Bitoracles-2b394a1a22a6800e81c8cb675fe96907?pvs=21), demonstrates that there are limitations regarding architectural decisions about consensus centralization, the use of specific tokens, oracle dependencies, costs, and data I/O inefficiency.

# Goals 🎯

- `Decentralization and more freedom to use what you want, how and as much as you want` - Your computer, cell phone or devices as oracles, to perform off-chain data computation, which was demanded by on-chain contracts, to be rewarded for it.
- `Eliminating Proprietary Friction` - Removing dependence on specific oracles and servers, allowing the network to reward nodes using any wallet or settlement token, without intermediaries.
- `Cryptographic Transparency and Privacy` - Ensuring full algorithmic transparency (via open and auditable source code) and privacy of sensitive data, using Zero-Knowledge Proofs (ZKPs).
- `Encourage Database Providers to drain data` - Encourage Web2 Data Providers to drain data via Change Data Capture (CDC) and Event Sourcing, establishing a distributed Web3 Cache for low latency and high availability (P2P CDN).
- `P2P Resilience and Multi-Chain` Ensuring Fault Tolerance (Seeding) and high availability, allowing data to be verified and settled on-chain through multiple channels and distinct blockchains simultaneously.

- # Computation Clients 🚀

### `General` `off-chain` `on-chain`

1. `Distributed Computing Unit` - The client operates as a distributed computing unit and service agent. It fulfills on-chain contract requests, executes off-chain logic, and makes requests to Web2 providers via dedicated connectors, settling the response through the multi-chain channel.
2. `Web2 Data Event Sourcing` - The client must allow the configuration of local or private Web2 database endpoints (API, DB Connector) to become a primary data source within the “TorrentOracle” network.
3. `Algorithmic Transparency and Trust` - All off-chain code responsible for data collection, aggregation, and cryptographic proof generation (the "oracle service") must be open-source and deployed from publicly verified source code.
4. `Audit and Evidence` -  The client must display a local audit dashboard showing the hash of generated cryptographic evidence, slashing history and rewards, and the aggregation algorithm used for each feed they participate in, reinforcing algorithmic transparency.

### `On Computer` `off-chain`

1. `Incentive and Processing` - The client may have the option to dedicate more resources (CPU and Memory) to processing requests for data drainage and generating proof verification (ZK-Proofs).
2. `Remote Execution Attestation` **-** The Bitoracess protocol requires client nodes to have the ability to cryptographically prove to any network actor that their execution environment is sound using hardening strategies or hardware resources with TEE.
3. `QoS and Throttling` The data provider can set request rate limits (throttling) per oracle node to protect its servers against DDoS attacks and overload, and the Bitoracesss protocol must respect these limits.

### `On Mobile` `On IoT` `off-chain`

- `Light Node Operating Mode` - The client should prioritize minimal battery and data consumption. It does not store the full Web3 Cache, but only Merkle Proofs and Event Log Metadata (CDC) for quick verification.
- `Optimized Event Subscription` - The client should only subscribe to blockchain oracle events when the application is active and only for feeds that are directly relevant to the user, minimizing unnecessary gossip P2P traffic.
- `Support for Intermittent Connections` - The protocol must be resilient to rapid network changes (Wi-Fi to 4G) and connection drops, with fast P2P handshakes and the ability to synchronize missed event logs upon reconnection.

### `Smart Contracts` `on-chain`

- `Dispute Window` - The contract should impose a time window after the settlement of the data where any actor on the network can challenge (dispute) the veracity of the data, presenting contrary evidence before the data is finalized.
- **`Single Proxy API`** The contract must interact with the Bitoracesss protocol through a single proxy interface that abstracts the complexity of staking, slashing, and multi-chaining, simplifying consumption for DApps.
- **`Dynamic Fallback Mechanisms`** If the Bitoracesss network fails to provide data within a critical timeframe (latency), the contract must be able to automatically fall back to a "frozen" price (last valid price) or trigger a secure settlement mechanism (circuit breaker).

### `On Data` `off-chain` `on-chain`

- `Cryptographic Source Signature (Data Signing)` - The Bitracelless protocol should only trust data from Web2 sources that can be cryptographically signed with a known and registered public key. This ensures that the origin of the data (the Web2 server) is verifiable.
- `Privacy Metadata Tagging` - The Web2 source must provide metadata that tags which data fields contain PII (Personally Identifiable Information) so that oracle nodes (clients) know which data needs to be anonymized (ZKPs) before on-chain processing (LGPD/GDPR compliance).
- `Monetization of the Source (Indirect Fee)` - The protocol should provide a mechanism for a small fee from each oracle reward to be directed to the original Web2 Data Provider, incentivizing companies to share their data with the Web3 ecosystem.

- # References ☕

![Screenshot 2025-11-22 at 11.18.03.png](attachment:bc7aa091-2493-49f7-871f-aab93f04129d:Screenshot_2025-11-22_at_11.18.03.png)

*Table - Results of a search for publications by year in different databases (ACM, IEEE, Scopus, MDPI, ArXiv, Google Scholar). The first includes all databases, the second the databases with the most publications, and the last the databases with the fewest.*

### [`IEEE`](http://ieeexplore.ieee.org)

- `OK` - `SUR-101`  [`Blockchain Oracles: State-of-the-Art and Research Directions`](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9801856)
- `OK` - `SUR-102`  [`Real-world blockchain applications under the lens of the oracle problem. A systematic literature review`](https://ieeexplore-ieee-org.ez15.periodicos.capes.gov.br/stamp/stamp.jsp?tp=&arnumber=9380598)
- `OK` - `SUR-103`  [`Trustworthy Blockchain Oracles: Review, Comparison, and Open Research Challenges`](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9086815)
- `OK` - `SUR-104`  [`A Taxonomy of Blockchain Oracles: The Truth Depends on the Question`](https://ieeexplore-ieee-org.ez15.periodicos.capes.gov.br/stamp/stamp.jsp?tp=&arnumber=9805555)
- `OK` - `SUR-105`  [`A Decentralized Truth Discovery Approach to the Blockchain Oracle Problem`](https://ieeexplore-ieee-org.ez15.periodicos.capes.gov.br/stamp/stamp.jsp?tp=&arnumber=10229019)
- `OK` - `SUR-106`  [`From Oracles to Trustworthy Data On-Chaining Systems`](https://ieeexplore-ieee-org.ez15.periodicos.capes.gov.br/stamp/stamp.jsp?tp=&arnumber=8946220) `Table-1`

### [`ACM`](http://dl.acm.org)

- `OK` - `SUR-201`  [`Connect API with Blockchain: A Survey on Blockchain Oracle Implementation`](https://aglive.com/wp-content/uploads/2023/04/Amir_ACM_Comp__Sur___Blockchain_Oracle_Design_Patterns.pdf)
- `OK` - `SUR-202`  [`Decision Support Model for Selecting the Optimal Blockchain Oracle Platform: An Evaluation of Key Factors`](https://dl-acm-org.ez15.periodicos.capes.gov.br/doi/pdf/10.1145/3697011)

### `SCIENCE` ←→ [`SCOPUS`](https://www.scopus.com)

- `OK` - `SUR-301`  [`From trust to truth: Advancements in mitigating the Blockchain Oracle problem`](https://pdf.sciencedirectassets.com/272436/1-s2.0-S1084804523X0006X/1-s2.0-S1084804523000917/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLWVhc3QtMSJGMEQCICldMaSbyJTvCaONrszEqtJiyJTowQR21Eng9SlS5e0ZAiBgX7Q4%2BQgUOGlux4iM0iZaGZX6V02RCN7B53vliXaG3Cq7BQiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDA1OTAwMzU0Njg2NSIMphiSq%2BgvuLPTgH9JKo8FlOQv2WrSHf9iXkIwBWHEiQAH8OM1C42OboiZMN2F%2BfeAP2M6L5sQJiJtvM9i4slXLC76mef6zQWxZf9NxQcMSS8KRqFSim6WZlfBUolKYi%2BvpZAPH2I03TAF%2Fwz4a0Tg2HNePS3o%2FlwrLH3AwyICX%2F4gkeM7i8wqxM1C6uPv48vQ3SBzXVcVaaNqeliLohcY4PSvCRK8zg3BEnCOCz4rVjyzA0G70zJJoG%2BPDbXiMMPdE1R2Irz3LPKlaPXmU6cE5tZCFRzEsTBbyjeDhOK9yXedBJFAnJkYDpKrumpyTi38GgbQ7Zct%2FBNhThT5W1qO6mPZ2zLn%2BU%2BO2HD46ddXGf%2BuSM9DUAKrYFoJScGouX192%2FKV%2FYMu%2FZsAXv3pm2C%2F9OTzmezkbhwXQpvSZc8xIaLgREiQ639%2ByMjYJ5Uz4zbMJ11YMiHMwmBEJAb4g0u7KXl5DD%2F7r5J4FZHzjuvvVlkYwlcpBx8n4XLm13u%2FA81%2BiCDEO636je9VbHjOo7RmVXTgQBqe6F%2BjdPQ4cNLLGhy31sH3JmTC46NGq7omOUwMxusE8o2ImhwrhqFG8I5LdTa8xLBDfC0nFPmMcW2yKSPtHKdbyu5mZLJgCCUBuzXOR%2BcCOBDiynSTa0QtBdeu2ETYkx9Qn1WmKa5xf8ZTX9%2BN%2FOlZKhzXywGaX2RA0SnFBGwF8%2BByfwN96Umuky4Ao0FXIQslRheOb8%2Bf0f5wMCfrXvSv0hzMiDVf%2BNrjvnIEb03RqkS%2B0DoQODt2v0uBNFuwGYgjCxCfqiOS7OKORKVF3dVeHZC4JL3nYeJ1RJjR5d66RLt%2F%2FuG5yRJw%2BtMrsoimgKWaexny4ra3IOVQEeqqIcsw6%2BL1YAehYHxUpzDZ19u%2FBjqyAWDVMPCRxOBKibeeOItefW0yNCU7chIpDuxLnAxDTTtNi2aEeCV0e83Jihou%2FsXc2j4%2BZ7cldm%2B3cO5QFvUBWDHSW5qXajJgHYQ5nK4tMg%2F2g8IdkjIRxEUgAKGWG4TXTAVeC1xFFUKbBEk30GLrEf7HjoRvQ3FiB4eQrkkuXUiPDaJwlKuPCkTSyT5GJbHSrGuKqXFIgZzj6ovgI2QwzJHmImrjJxEzt01Q%2B%2BffkXYv3dM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250409T222559Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYSEAAHKWJ%2F20250409%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=05c0b0c5dfd6c934bb97c3e6d97030a2b33b7033938c1d87370f8117e443ad79&hash=41da4f1e3708659782c11ec8d9fd19876b265936438a9712fb0ddca94164c26e&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1084804523000917&tid=spdf-7a1ac18e-9080-4358-a5cd-ed24b10de8f2&sid=af043e2e4d0f704aee5b17138a3257364bf0gxrqa&type=client&tsoh=d3d3LXNjaWVuY2VkaXJlY3QtY29tLmV6MTUucGVyaW9kaWNvcy5jYXBlcy5nb3YuYnI%3D&rh=d3d3LXNjaWVuY2VkaXJlY3QtY29tLmV6MTUucGVyaW9kaWNvcy5jYXBlcy5nb3YuYnI%3D&ua=18135b55030057005506&rr=92dd6c6bda596d63&cc=br)
- `OK` - `SUR-302`  [`Reliability analysis for blockchain oracles`](https://sci-hub.se/https://doi.org/10.1016/j.compeleceng.2020.106582)
- `OK` - `SUR-303`  [`Enhancing Blockchain-Based Processes with Decentralized Oracles`](https://penni.wu.ac.at/papers/BPM%202021%20Enhancing%20Blockchain-based%20Processes%20with%20Decentralized%20Oracles.pdf)
- `OK` - `SUR-304`  [`Blockchain Oracles: A Framework for Blockchain-Based Applications`](https://link.springer.com/chapter/10.1007/978-3-030-58779-6_2) `Forum`
- `OK` - `SUR-305`  [`Foundational Oracle Patterns: Connecting Blockchain to the Off-Chain World`](https://www.diciccio.net/claudio/preprints/Muehlberger-etal-BPMBCF2020-FoundationalOraclePatterns.pdf) `Forum`
- `OK` - `SUR-306`  [`Preparing auditors for the blockchain oracle problem`](https://publications.aaahq.org/cia/article/15/2/P27/7059/Preparing-Auditors-for-the-Blockchain-Oracle) `Forum`
- `NO` - `SUR-307`  [`Auditing the blockchain oracle problem`](https://publications.aaahq.org/jis/article-abstract/35/1/121/939/Auditing-the-Blockchain-Oracle-Problem?redirectedFrom=fulltext) `Forum` `Block`
- `NO` - `SUR-308`  [`The Critical Role of Blockchain Oracles in Web 3`](https://www.igi-global.com/chapter/the-critical-role-of-blockchain-oracles-in-web-3/342266) `Forum` `Block`

### [`MDPI`](https://www.mdpi.com/)

- `OK` - `SUR-401`  [`Overview of Blockchain Oracle Research`](https://www.mdpi.com/1999-5903/14/6/175)
- `OK` - `SUR-402`  [`Understanding the Blockchain Oracle Problem: A Call for Action`](https://www.mdpi.com/2078-2489/11/11/509)
- `OK` - `SUR-403`  [`The Blockchain Oracle Problem in Decentralized Finance—A Multivocal Approach`](https://www.mdpi.com/2076-3417/11/16/7572)
- `OK` - `SUR-404`  [`Overcoming the Blockchain Oracle Problem in the Traceability of Non-Fungible Products`](https://www.mdpi.com/2071-1050/12/6/2391)
- `OK` - `SUR-405`  [`Trusted Academic Transcripts on the Blockchain: A Systematic Literature Review`](https://www.mdpi.com/2076-3417/11/4/1842)

### [`arXiv`](https://arxiv.org/)

- `OK` - `SUR-501`  ****[`A Study of Blockchain Oracles`](https://arxiv.org/abs/2004.07140)
- `OK` - `SUR-502`  ****[`From Reality Keys to Oraclize. A Deep Dive into the History of Bitcoin Oracles`](https://arxiv.org/abs/2302.07911)
- `OK` - `SUR-503`  ****[`Blockchain Oracle Design Patterns`](https://arxiv.org/pdf/2106.09349)

### [`Google Scholar`](https://scholar.google.com.br/scholar?start=0&q=%22blockchain%22+and+%22oracle%22&hl=pt-BR&as_sdt=0,5&as_rr=1)

- `OK` - `SUR-601`  [`From Athens to the Blockchain: Oracles for Digital Democracy`](https://www.frontiersin.org/journals/blockchain/articles/10.3389/fbloc.2020.575662/full)
- `OK` - `SUR-602`  [`A Systematic Literature Review on Blockchain Oracles: State of Research, Challenges, and Trends`](https://monami.hs-mittweida.de/frontdoor/deliver/index/docId/14641/file/14641.pdf)
- `OK` - `SUR-603`  [`Blockchain Oracles: A Framework for Blockchain-Based Applications - Systematic Literature Review Protocol and Results`](https://datadoi.ee/handle/33/147)
- `FU` - `SUR-604`  [`Oracles in Blockchain Architectures: A Literature Review on Their Implementation in Complex Multi-organizational Processes`](https://link.springer.com/chapter/10.1007/978-3-031-60328-0_3) `Block`

# Additional 🎁

### `thesis`

- `OK` `REF-01` `2017`  [`The Oracle Problem: An Analysis of How Blockchain Oracles Undermine the Advantages of Decentralized Ledger Systems`](https://sci-hub.se/https://dx.doi.org/10.2139/ssrn.3382343) `Master’s Thesis`
- `OK` `REF-02` `2019` [`Blockchain Oracles Systematic Literature Review`](https://core.ac.uk/reader/237085000) `Master’s Thesis`

### `books`

- `OK` `BOK-01` `2019` [`Mastering Ethereum: Building Smart Contracts and DApps`](https://www.goodreads.com/book/show/33584554-mastering-ethereum) [`Chapter 11 Page 473`](https://wiki.anomalous.xyz/pdfs/mastering-ethereum.pdf)
- `OK` `BOK-02` `2019` [`Architecture for Blockchain Applications`](https://sci-hub.se/https://doi.org/10.1007/978-3-030-03035-3) `Chapter 7` `Blockchain Patterns` `Page 125`
- `OK` `BOK-03` `2019` [`Proof of Stake`](https://nathanschneider.info/open/Buterin-ProofOfStake.pdf)

### `whitepapers`

- `MM` `WHT-01` `2017` [`Deplhi For smart contracts, the oracle is the source of truth. Use our frameworks to decentralize this power`](https://delphi.systems/whitepaper.pdf)

### `sites`

- `OK` `SITE-01` [`Ethereum Foundation Oracles`](https://ethereum.org/en/developers/docs/oracles/)

### `insights`

- `OK` `INS-01` `2019` [`If Rockefeller Were a Coder`](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3082915)

### `articles-reference`

- `OK` `ARR-01` `2016` [`The Blockchain as a Software Connector`](https://ieeexplore.ieee.org/document/7516828)

### `descentralization`

- `OK` `DES-01` `2017` [`Pervasive Decentralisation of Digital Infrastructures: A Framework for Blockchain enabled System and Use Case Analysis`](https://pdfs.semanticscholar.org/859d/0535e16095f274df4d69df54954b21258a13.pdf)
- `OK` `DES-02` `2022` [`Truthful Decentralized Blockchain Oracles`](https://sci-hub.se/https://doi.org/10.1002/nem.2179) `SUR-105`

### `truth discovery`

- `OK` `DES-01` `2008` [`Truth Discovery with Multiple Conflicting Information Providers on the Web`](https://web.cs.ucla.edu/~yzsun/classes/2014Spring_CS7280/Papers/Trust/kdd07_xyin.pdf) `SUR-105`
- `NO` `DES-02` `2015` [`FaitCrowd: Fine Grained Truth Discovery for Crowdsourced Data Aggregation`](https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?article=4260&context=sis_research) `SUR-105`

### `byzantine fault tolerant`

- `NO` `BYZ-01` `2016` [`The Honey Badger of BFT Protocols`](https://eprint.iacr.org/2016/199.pdf) `SUR-105`
- `NO` `BYZ-02` `2018` [`BEAT: Asynchronous BFT Made Practical`](https://userpages.cs.umbc.edu/hbzhang/files/beat.pdf) [`Vídeo`](https://www.youtube.com/watch?v=u0nypF5AIF4) `SUR-105`
- `NO` `BYZ-02` `2019` [`The Byzantine Generals Problem - Leslie Lamport`](https://lamport.azurewebsites.net/pubs/byz.pdf) `SUR-105`

### `consensu`

- `OK`  `CON-01` `2020` [`A Survey of Distributed Consensus Protocols for Blockchain Networks`](https://ieeexplore-ieee-org.ez15.periodicos.capes.gov.br/stamp/stamp.jsp?tp=&arnumber=8972381) `SUR-105`

### `trust`

- `OK`  `TRU-01` `2019` [`How to Trust a Bot: An RPA User Perspective`](https://link.springer.com/chapter/10.1007/978-3-030-58779-6_10) `Forum`

### `my summary`

- `OK`  `RES-01` `2025` [`Systematic review in the Portuguese language for an ongoing master's degree course`](https://drive.google.com/file/d/1NQOJcucG7bpQJBkByQ7ks7Cg0-dGav8c/view?usp=sharing)
- `OK`  `RES-01` `2025` [`Mental map of the topics of a thesis that explains the Oracle Problem`](https://coggle.it/diagram/YHJWzT4M8EWrBIDQ/t/the-oracle-problem) → [`Reference`](https://sci-hub.se/https://dx.doi.org/10.2139/ssrn.3382343)

# `Insights` about Consensus and Network

![image.png](attachment:adf1ad68-21fb-4d02-946b-402f8e328936:image.png)

# `Insights` about SRE and Observability

![image.png](attachment:b8f2a798-1916-48a7-8e76-f10303c24d7c:image.png)

# `Insights` about development on off-chain

![image.png](attachment:de9602dd-fb81-4435-983f-458da8a26d30:image.png)

# `Insights` about Messaging and Event Sourcing

![image.png](attachment:9768cb3f-b0ce-4df8-aa60-f6f8ba1b38f7:image.png)
