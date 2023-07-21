class BankAccount {
    private accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("123456789", 1000);
console.log(account.getAccountNumber());
console.log(account.getBalance());