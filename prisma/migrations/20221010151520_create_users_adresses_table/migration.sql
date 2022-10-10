-- CreateTable
CREATE TABLE "usersAdresses" (
    "id" SERIAL NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "adress" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isMain" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "usersAdresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usersAdresses" ADD CONSTRAINT "usersAdresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
