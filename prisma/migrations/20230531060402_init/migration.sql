-- CreateTable
CREATE TABLE "auctionbids" (
    "bidid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "auctionId" INTEGER NOT NULL,
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
