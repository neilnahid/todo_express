# Migration `20201019073040-init`

This migration has been generated at 10/19/2020, 3:30:40 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `User` (
`id` int  NOT NULL  AUTO_INCREMENT,
`email` varchar(191)  NOT NULL ,
`password` varchar(191)  NOT NULL ,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
UNIQUE INDEX `User.email_unique`(`email`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201019073040-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,19 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id        Int      @id @default(autoincrement())
+  email     String   @unique
+  password  String
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
+}
```


