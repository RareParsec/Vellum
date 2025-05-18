/*
  Warnings:

  - You are about to drop the column `content` on the `notification` table. All the data in the column will be lost.
  - Added the required column `message` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_post_id_fkey`;

-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `Notification_comment_id_fkey`;

-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `Notification_post_id_fkey`;

-- DropForeignKey
ALTER TABLE `postview` DROP FOREIGN KEY `PostView_post_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscribedpost` DROP FOREIGN KEY `SubscribedPost_post_id_fkey`;

-- DropIndex
DROP INDEX `Comment_post_id_fkey` ON `comment`;

-- DropIndex
DROP INDEX `Notification_comment_id_fkey` ON `notification`;

-- DropIndex
DROP INDEX `Notification_post_id_fkey` ON `notification`;

-- DropIndex
DROP INDEX `SubscribedPost_post_id_fkey` ON `subscribedpost`;

-- AlterTable
ALTER TABLE `notification` DROP COLUMN `content`,
    ADD COLUMN `message` VARCHAR(191) NOT NULL,
    ADD COLUMN `viewed` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostView` ADD CONSTRAINT `PostView_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_comment_id_fkey` FOREIGN KEY (`comment_id`) REFERENCES `Comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubscribedPost` ADD CONSTRAINT `SubscribedPost_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
