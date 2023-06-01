-- CreateTable
CREATE TABLE "auctions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "endTime" DATETIME NOT NULL
);
