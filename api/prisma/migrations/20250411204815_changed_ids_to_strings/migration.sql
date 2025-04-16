/*
  Warnings:

  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `commentvote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `postview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `postvote` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `_posttohashtag` DROP FOREIGN KEY `_PostToHashTag_B_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_parent_comment_id_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_post_id_fkey`;

-- DropIndex
DROP INDEX `Comment_parent_comment_id_fkey` ON `comment`;

-- DropIndex
DROP INDEX `Comment_post_id_fkey` ON `comment`;

-- AlterTable
ALTER TABLE `_posttohashtag` MODIFY `B` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `comment` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `post_id` VARCHAR(191) NOT NULL,
    MODIFY `parent_comment_id` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `commentvote` DROP PRIMARY KEY,
    MODIFY `comment_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`comment_id`, `user_id`);

-- AlterTable
ALTER TABLE `post` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `postview` DROP PRIMARY KEY,
    MODIFY `post_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`post_id`, `user_id`);

-- AlterTable
ALTER TABLE `postvote` DROP PRIMARY KEY,
    MODIFY `post_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`post_id`, `user_id`);

-- CreateIndex
CREATE INDEX `PostView_post_id_idx` ON `PostView`(`post_id`);

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_parent_comment_id_fkey` FOREIGN KEY (`parent_comment_id`) REFERENCES `Comment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToHashTag` ADD CONSTRAINT `_PostToHashTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
