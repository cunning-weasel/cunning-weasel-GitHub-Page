## Crypto and Blockchain Have Gotten a Bad Rep

Hype, greed, and a fundamental misunderstanding of the tech have led to cryptocurrency and blockchain as a whole being labeled—at worst—as a "pyramid scheme," and at best as "insufficient, lacking any real-world impact."

Proponents will often ask, "What's one piece of software or tech that's currently blockchain or crypto-based, and that's actually being bought or sold in the global marketplace?"

In this article, I'll reflect on the process of adding a Solana-based payment mechanism to my website. The site's main purpose is to facilitate a transaction, either in fiat using Gumroad or, alternatively, using Solana (SOL).

### My Approach
The goal behind the fiat transaction was always to enable users to purchase my game and have full ownership of it. This means they buy either the Windows, Linux, or browser-based (PWA/WASM) version of the game, and afterward, they have full offline access to it—requiring only a license for verification. No email, no personal identifiable information (PII), nothing. Just the user's encrypted license is stored on the backend, along with a couple of IDs associating the purchase as recorded by Gumroad.

Once a user has purchased the game, they're free to distribute it as they see fit. They can use the same license key to verify and download the game on other devices, if they choose. I don't store or track this data and have no interest in doing so.

These points align well with accepting crypto payments. In fact, I’d say it fits the general "ethos" of cryptocurrency. It's the closest thing I can think of to a real-life, physical cash transaction for a product or service, with built-in anonymity and no need for pre or post-purchase attribution.

~ Completely unrelated side note: shout-out to my cousin Pim for burning me CDs of Unreal Tournament 1999 and later Serious Sam: The Second Encounter back in the day when I was like 10 😊 ~

### A Rough Breakdown of the Architecture and Where Solana Fits In
#### Frontend:
- solana-web3.js 
- Gumroad & backend calls
- service worker
#### Backend:
- ASP.NET EF Core MVC
- backend apis.cs
- SQLite db
#### Solana:
- program (smart-contract).c

I opted for solana because:

Language Support: It seems to be one of the only blockchains where you can write smart contracts in C. While Rust is suggested, I have about as much interest in Rust as I do in Zig, Odin, Java, Go, and TypeScript—that is, none at all. All jokes aside, they plan to open Solana to other languages, which is great for the ecosystem. Their Rust framework for developing on-chain programs? Not so much. It feels like needless abstraction in my mind, but hey.

Performance: Solana is fast. My three users who buy the game probably don’t need high-frequency trading-like speeds, but Solana’s performance-aware architecture (despite being written in Rust, hurr hurr) makes it compelling for any business interested in timely transactions.

No Need for Solidity: I wouldn’t have to learn Solidity or whatever other language other blockchains use for smart contracts. This is one of my biggest criticisms of blockchain—the tendency to abstract away from the core hardware and software logic.

Energy Efficiency: Solana is also energy-efficient, which is another big sticking point for me regarding blockchain as a whole. Solana excels in this area, and it’s a significant point in favor of its software.

### The Benefits of Using Solana
One of the biggest advantages of structuring the architecture this way is that the Solana program (smart contract) technically replaces the entire backend of the web app (also known as a dApp, as the crypto community likes to say). You get a small heap (32 KB), minimal to non-existant tooling (which i love), and off you go. You build only what you need to solve the problem at hand, which - especially in c - forces a very pragmatic and efficient approach.

Using a wallet-pairing strategy to associate transactions on the FE means you never need to know more than the publicly available data about your buyers—and they don’t need to know more than what’s publicly available about you. There’s no need to store or manage sensitive information, as its public and secure by default.

Solana offers built-in rules that accommodate authentication, security, immutability, and ownership. It’s a pretty sweet way of writing purchase logic, and very different from the traditional web world I’m used to. Wallets are readily available via the window interface (i.e., `window.solana` and `window.ethereum` for Phantom and Coinbase wallets on the frontend).

### Final Thoughts
For transactional use cases like mine, you can create complex and interesting smart contracts for commercial and business purposes. These contracts are extremely performant, have a small footprint, and can serve as a secondary - and maybe even one day - a primary fiscal channel.

With Stripe (re)adopting crypto payments (albeit only stablecoins, if I understand correctly) and Shopify also embracing Solana (sadly, also via stablecoins), it’s clear that the big players see the potential.

And with price-gouging incumbents like PayPal continuing on their
current path, I can’t think of a bigger advertisement for businesses to embrace cryptocurrency payments and blockchain transactions.

