import { isAddress, ethers } from 'ethers'; 

export const sendTransaction = async (
  signer: ethers.Signer,
  toAddress: string,
  amountInWei: bigint
) => {
  try {
    
    if (!isAddress(toAddress)) {
      throw new Error('Invalid recipient address');
    }

   
    const tx = await signer.sendTransaction({
      to: toAddress,
      value: amountInWei, 
    });

    return tx.hash; 
  } catch (error) {
    console.error('Error sending transaction:', error);
    throw error;
  }
};
