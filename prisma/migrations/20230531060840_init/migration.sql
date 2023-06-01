/*
  Warnings:

  - Added the required column `email` to the `auctionbids` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_auctionbids" (
    "bidid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "auctionId" INTEGER NOT NULL,
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_auctionbids" ("amount", "auctionId", "bidid", "created_at", "id", "name") SELECT "amount", "auctionId", "bidid", "created_at", "id", "name" FROM "auctionbids";
DROP TABLE "auctionbids";
ALTER TABLE "new_auctionbids" RENAME TO "auctionbids";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
