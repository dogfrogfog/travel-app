/*
  Warnings:

  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title,authorEmail]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ageGroup` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorEmail` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Post_title_userId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "userId",
ADD COLUMN     "ageGroup" TEXT NOT NULL,
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "authorEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_authorEmail_key" ON "Post"("title", "authorEmail");
