"use client";
import { Button } from "@/components/ui/button";
import {
  createService,
  createServiceCategory,
  getAllServiceCategory,
  getAllServicearPerOrgId,
  getUserServices,
} from "@/lib/database/actions/service.action";
import { IService } from "@/lib/database/models/service.model";
import { Plus } from "lucide-react";
import React, { startTransition, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { IServicecategory } from "@/lib/database/models/service.category.model";
import { useRouter } from "next/navigation";
import { getOrganizationasPerId } from "@/lib/database/actions/organization.auth.action";
import ApprovalForm from "./ApprovalForm";
import Image from "next/image";

const OrgServices = () => {
  const router = useRouter();

  const [ServiceCategoryName, setServiceCategoryName] = useState("");
  const [ServiceCategory, setServiceCategory] = useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [Approved, setApproved] = React.useState("");
  const [loadingServices, setLoadingServices] = React.useState(true);

  const [services, setservices] = useState<any>([]);

  const [category, setcategory] = React.useState<IServicecategory[]>([]);

  const [newcategory, setnewcategory] = React.useState("");

  let usertoken = "";

  const handleService = async (e: any) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("x-auth-token");
      if (token) {
        usertoken = token;
      }
    }

    await createService({
      service: {
        serviceName: ServiceCategoryName,
        serviceCategory: ServiceCategory,
      },
      userToken: usertoken,
    }).then((res) => {
      alert(`Service is successfully created, Please refresh the page`)
      setOpen(false)
    });
  };

  const handleAddCategory = () => {
    createServiceCategory({
      category: { name: newcategory },
    }).then((res) => {
      setcategory((prevState) => [...prevState, res]);
    });
  };
  useEffect(() => {
    const getAllcategoryList = async () => {
      const res = await getAllServiceCategory();
      res && setcategory(res as IServicecategory[]);
      setLoadingServices(false);
    };

    const getUserServ = async () => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("x-auth-token");
        if (token) {
          usertoken = token;
        }
      }
      const res = await getUserServices(usertoken);
      setservices(res);
    };
    const getMyorg = async () => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("x-auth-token");
        if (token) {
          usertoken = token;
        }
      }
      const myOrganization = await getOrganizationasPerId(usertoken);

      if (myOrganization) {
        if (myOrganization.orgCategory != "6639d49c3215cb4cf09e89d0") {
          setApproved(myOrganization.approvalStatus);
        } else {
          setApproved("Approved");
        }
      }
    };
    getAllcategoryList();
    getMyorg();
    getUserServ();
  }, []);



  if (Approved == "Applied") {
    return (
      <div className="min-h-screen w-full md:px-14 p-3 flex justify-center items-center">
        <Image
          src={`/loading.gif`}
          height={500}
          width={500}
          alt="pending image"
        />
        <div>
          <h1 className="text-3xl font-semibold text-zinc-900 text-center">
            Your Approval Status is Pending
          </h1>
          <p className="text-center mt-2 text-lg font-medium text-zinc-500">
            We are in the process of verification of your profile , please wait
            for a while , you will get verification status on your mail
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Approved == "Pending" ? (
        <div>
          <ApprovalForm ordId={usertoken} />
        </div>
      ) : (
        <div className=" md:px-14 p-3 py-8">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="">
              <h1 className="text-2xl text-zinc-900 font-semibold">
                Your Services({services.length} {Approved} ){" "}
              </h1>
              <p className="text-zinc-700">
                All of your services you have created
              </p>
            </div>
            <div>
              {/* <Button className='flex gap-1 bg-zinc-900 hover:bg-blue-700 ' >
                <Plus/>
                
            </Button> */}
              <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger className="pt-2 pb-2 pl-2 text-sm">
                  <div className="flex items-center bg-[#1D4ED8] p-3 pr-6 rounded-full gap-2 ml-2 ">
                    <Plus size={30} color="white" className="border border-white rounded-full p-1" />
                    <p className="text-white">Add Service</p>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-full">
                  <form onSubmit={handleService}>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add Service</AlertDialogTitle>

                      <AlertDialogDescription>
                        <Input
                          type="text"
                          value={ServiceCategoryName}
                          onChange={(e) => setServiceCategoryName(e.target.value)}
                          placeholder="Service Name"
                        />
                        <div className="h-3 w-full"></div>
                        {/* Service category */}
                        <Select
                          onValueChange={(value) => {
                            setServiceCategory(value);
                          }}
                          defaultValue={value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Category" />
                          </SelectTrigger>
                          <SelectContent>
                            {category.map((curr) => (
                              <SelectItem key={curr._id} value={curr._id}>
                                {curr.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {/* Service category end */}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    {/* <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction type="submit">
                        Submit
                      </AlertDialogAction>
                    </AlertDialogFooter> */}
                    <div className="mt-2 flex justify-end items-end ">
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <Button className="ml-2" type="submit">Submit</Button>
                    </div>
                  </form>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          {loadingServices ? (
            <div className="h-[50vh] bg-white flex justify-center items-center">
              <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-zinc-500"></div>
            </div>
          ) : services.length < 1 ? (
            <div className="w-full min-h-screen flex justify-center items-center ">
              <div className="px-20 py-12 rounded-md mb-24 bg-zinc-200 flex justify-center items-center flex-col">
                <h1>Sorry, No Data Found</h1>
                <p>Please try again later or create new service</p>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 mt-10 flex-wrap">
              {services.map((curr: IService) => {
                return (
                  <div
                    key={curr._id}
                    onClick={() => {
                      router.push(`/serviceprovider/dashboard/${curr._id}`);
                    }}
                    className="md:h-[250px] md:w-[400px] h-[200px] w-[300px] bg-zinc-400 rounded-md flex justify-center items-center bg-serviceBg cursor-pointer"
                  >
                    <h1 className="flex text-2xl text-white font-semibold">
                      {curr.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrgServices;
