-- CreateTable
CREATE TABLE "ServicesOnBranches" (
    "serviceId" INTEGER NOT NULL,
    "branchId" INTEGER NOT NULL,

    CONSTRAINT "ServicesOnBranches_pkey" PRIMARY KEY ("serviceId","branchId")
);

-- AddForeignKey
ALTER TABLE "ServicesOnBranches" ADD CONSTRAINT "ServicesOnBranches_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicesOnBranches" ADD CONSTRAINT "ServicesOnBranches_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
