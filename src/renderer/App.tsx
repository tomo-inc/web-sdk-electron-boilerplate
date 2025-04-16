import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { TomoContextProvider, useTomo } from '@tomo-inc/tomo-web-sdk';
import { Connection, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import {
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  getAccount,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
  TokenAccountNotFoundError,
  TokenInvalidAccountOwnerError,
} from "@solana/spl-token";
import icon from '../../assets/icon.svg';
import './App.css';
import '@tomo-inc/tomo-web-sdk/style.css';

export const solEndpoint =
  "https://rpc.ankr.com/solana/c2d7e8a3db5dce62e202db3d28cca25e74da5028abbf20764e2961918ba34dfc";

// Get Sol Connection
let connection: Connection;
function getConnection() {
  if (!connection) {
    connection = new Connection(solEndpoint, "recent");
  }
  return connection;
}

async function createSolTx(
  fromAddress: string,
  toAddress: string,
  amount: number,
  mintAddress?: string,
) {
  try {
    const connection = getConnection();
    const tx = new Transaction();
    const fromPublicKey = new PublicKey(fromAddress);
    const toPublicKey = new PublicKey(toAddress);

    if (!tx.feePayer) {
      tx.feePayer = fromPublicKey;
    }

    if (mintAddress) {
      const tokenPublicKey = new PublicKey(mintAddress);
      const fromTokenPubKey = await getAssociatedTokenAddress(
        tokenPublicKey,
        new PublicKey(fromAddress),
      );
      const toTokenPubKey = await getAssociatedTokenAddress(
        tokenPublicKey,
        new PublicKey(toAddress),
      );

      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

      let account: any;
      try {
        account = await getAccount(connection, toTokenPubKey);
      } catch (error: unknown) {
        if (
          error instanceof TokenAccountNotFoundError ||
          error instanceof TokenInvalidAccountOwnerError
        ) {
          try {
            tx.add(
              createAssociatedTokenAccountInstruction(
                fromPublicKey,
                toTokenPubKey,
                toPublicKey,
                tokenPublicKey,
              ),
            );
          } catch (error: unknown) {
            /* empty */
          }
        } else {
          throw error;
        }
      }
      console.log("account", account);

      tx.add(
        createTransferInstruction(
          fromTokenPubKey,
          toTokenPubKey,
          fromPublicKey,
          amount,
          [],
          TOKEN_PROGRAM_ID,
        ),
      );
    } else {
      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
      tx.add(
        SystemProgram.transfer({
          fromPubkey: fromPublicKey,
          toPubkey: toPublicKey,
          lamports: amount,
        }),
      );
    }
    return tx;
  } catch (e) {
    console.error(e)
    return null;
  }
}


function Hello() {
  const {
    providers,
    walletState,
    openConnectModal,
    connected,
  } = useTomo();

  const { solanaProvider } = providers

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button type="button" onClick={openConnectModal}>
          open web sdk
        </button>
        {solanaProvider ?
          <button type="button" onClick={async () => {
            const from = walletState.solanaAddress || "";
            const to = "4TE4RMoG2g6g3vTcBpVBJvGAALVCdzo4boTDheRL7Hqt";
            const decimals = 9;
            const amount = Number(0.000001 * 10 ** decimals);
            const transaction = await createSolTx(from, to, amount);

            if (!transaction) throw new Error("Failed to create transaction");
            try {
              const res = await solanaProvider.signTransaction(transaction);
              alert(JSON.stringify(res))
            } catch (e) {
              alert(JSON.stringify(e))
            }
            
          }}>
            sign tx
          </button> : null
        }

      </div>
    </div>
  );
}

export default function App() {
  return (
    <TomoContextProvider
      clientId={
        'yiPWTD4fztgEVS78HDUHoSFb4geppl2XTrhHZQUdGnh981bE13m2jrEwBhMlKNUNRWSoCYwD4ruOhWStuunYxMF0'
      }
      chainTypes={['solana']}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </TomoContextProvider>
  );
}
