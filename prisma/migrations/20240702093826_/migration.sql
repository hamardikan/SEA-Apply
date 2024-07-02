/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_serviceId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "serviceId",
ADD COLUMN     "service" TEXT;

-- DropTable
DROP TABLE "Service";
