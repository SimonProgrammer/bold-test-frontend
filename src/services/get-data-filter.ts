export interface IPayment {
    paymentType: string;
    paymentStatus: string;
    datePayment: Date;
    franchise: string;
    lastDigit: number;
    transactionId: string;
    amount: number;
    deductionStatus: boolean;
    deductionAmount: number;
  }

async function getDataFilter(type: String, time: String): Promise<IPayment[]> {
    const baseUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${baseUrl}/payments?type=${type}&time=${time}`);
    if(response.ok){
        return await response.json();
    }
    return [];
}

export default getDataFilter;