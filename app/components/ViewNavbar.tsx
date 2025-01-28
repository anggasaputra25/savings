'use client'
import Link from "next/link";
import { useEffect } from "react";
import { FaArrowRightFromBracket, FaArrowRightToBracket, FaGear } from "react-icons/fa6";
import Swal from "sweetalert2";

const ViewNavbar = ({isLanding}: {isLanding: boolean}) => {
  const handleForm = () => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      const data = JSON.parse(savedData);  
      Swal.fire({
        title: "Edit Savings",
        html:
          '<p class="text-left mb-1">Image URL</p>' +
          '<input id="image" type="text" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-1" value='+data.image.username+'>' +
          '<p class="text-left mb-3 text-sm text-gray-300">You can copy image url from pinterest!</p>' +
          '<p class="text-left mb-1">Name</p>' +
          '<input id="name" type="text" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3" value='+data.user.name+'>' +
          '<p class="text-left mb-1">First Saving</p>' +
          '<input id="first_saving" type="number" class="p-1 bg-transparent w-full border rounded bg-white text-gray-600 mb-3" disabled value='+data.saving.first_saving+'>' +
          '<p class="text-left mb-1">Daily Salary</p>' +
          '<input id="daily_salary" type="number" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3" value='+data.user.daily_salary+'>' +
          '<p class="text-left mb-1">Description</p>' +
          '<textarea id="description" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3">'+data.user.description+'</textarea>',
        confirmButtonText: "Save",
        showCancelButton: true,
        reverseButtons: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#2A9D8F",
        background: "#171717",
        color: "white",
        preConfirm: () => {
          const imageInput = document.getElementById("image") as HTMLInputElement;
          const nameInput = document.getElementById("name") as HTMLInputElement;
          const firstSavingInput = document.getElementById("first_saving") as HTMLInputElement;
          const dailySalaryInput = document.getElementById("daily_salary") as HTMLInputElement;
          const descriptionInput = document.getElementById("description") as HTMLTextAreaElement;
    
          if (imageInput && nameInput && firstSavingInput && dailySalaryInput && descriptionInput) {
            const updatedData = {
              ...data,
              user: {
                ...data.user,
                name: nameInput.value,
                description: descriptionInput.value,
                daily_salary: parseFloat(dailySalaryInput.value) || 0,
              },
              saving: {
                ...data.saving,
                first_saving: parseFloat(firstSavingInput.value) || 0,
                total_saving: parseFloat(firstSavingInput.value) || 0,
              },
              image: {
                username: imageInput.value,
              }
            };
    
            // Simpan data ke localStorage
            localStorage.setItem("data", JSON.stringify(updatedData));
            return updatedData;
          } else {
            Swal.showValidationMessage("Please fill out all fields correctly.");
            return null;
          }
        },
      });
    } else {
      const data = {
        user: {
          name: "",
          description: "",
          daily_salary: 0,
        },
        saving: {
          first_saving: 0,
          total_saving: 0,
          total_money_used: 0,
        },
        bill: [],
        image: {
          username: ""
        }
      };
      Swal.fire({
        title: "Set Savings",
        html:
          '<p class="text-left mb-1">Name</p>' +
          '<input id="name" type="text" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3" value='+data.user.name+'>' +
          '<p class="text-left mb-1">First Saving</p>' +
          '<input id="first_saving" type="number" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3" value='+data.saving.first_saving+'>' +
          '<p class="text-left mb-1">Daily Salary</p>' +
          '<input id="daily_salary" type="number" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3" value='+data.user.daily_salary+'>' +
          '<p class="text-left mb-1">Description</p>' +
          '<textarea id="description" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3">'+data.user.description+'</textarea>',
        confirmButtonText: "Save",
        showCancelButton: true,
        reverseButtons: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#2A9D8F",
        background: "#171717",
        color: "white",
        preConfirm: () => {
          const nameInput = document.getElementById("name") as HTMLInputElement;
          const firstSavingInput = document.getElementById("first_saving") as HTMLInputElement;
          const dailySalaryInput = document.getElementById("daily_salary") as HTMLInputElement;
          const descriptionInput = document.getElementById("description") as HTMLTextAreaElement;
    
          if (nameInput && firstSavingInput && dailySalaryInput && descriptionInput) {
            const updatedData = {
              ...data,
              user: {
                ...data.user,
                name: nameInput.value,
                description: descriptionInput.value,
                daily_salary: parseFloat(dailySalaryInput.value) || 0,
              },
              saving: {
                ...data.saving,
                first_saving: parseFloat(firstSavingInput.value) || 0,
                total_saving: parseFloat(firstSavingInput.value) || 0,
              },
            };
    
            // Simpan data ke localStorage
            localStorage.setItem("data", JSON.stringify(updatedData));
            return updatedData;
          } else {
            Swal.showValidationMessage("Please fill out all fields correctly.");
            return null;
          }
        },
      });
    }
  };

  const handleFormBill = () => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      const data = JSON.parse(savedData);  
      Swal.fire({
        title: "Add Bills / Savings",
        html:
          '<p class="text-left mb-1">Total Money Spent</p>' +
          '<input id="total_money_spent" type="number" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3">' +
          '<p class="text-left mb-1">Description</p>' +
          '<textarea id="description" class="p-1 bg-transparent w-full border rounded bg-white text-black mb-3"></textarea>' +
          '<div class="flex items-center mb-4">' +
          '<input id="increase-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">'+
          '<label for="increase-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">This will increase my savings</label>'+
          '</div>',
        confirmButtonText: "Add",
        showCancelButton: true,
        reverseButtons: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#2A9D8F",
        background: "#171717",
        color: "white",
        preConfirm: () => {
          const totalMoneySpentInput = document.getElementById("total_money_spent") as HTMLInputElement;
          const descriptionInput = document.getElementById("description") as HTMLTextAreaElement;
          const increaseCheckbox = document.getElementById("increase-checkbox") as HTMLInputElement;
  
          if (totalMoneySpentInput && descriptionInput) {
            const totalMoneySpent = parseFloat(totalMoneySpentInput.value);
            const description = descriptionInput.value.trim();
            const isIncrease = increaseCheckbox.checked;
            let updatedData;
            
            if (isNaN(totalMoneySpent) || totalMoneySpent <= 0 || description === "") {
              Swal.showValidationMessage("Please provide valid input for all fields.");
              return null;
            }

            if (isIncrease) {
              updatedData = {
                ...data,
                saving: {
                  ...data.saving,
                  total_saving: data.saving.total_saving + totalMoneySpent,
                },
                bill: [
                  ...data.bill,
                  {
                    ordinal_number: data.bill.length + 1,
                    total_money_spent: totalMoneySpent,
                    description: description,
                    is_increase: isIncrease,
                    date_now: new Date(),
                  },
                ],
              };
            } else {
              updatedData = {
                ...data,
                saving: {
                  ...data.saving,
                  total_saving: data.saving.total_saving - totalMoneySpent,
                  total_money_used: data.saving.total_money_used + totalMoneySpent,
                },
                bill: [
                  ...data.bill,
                  {
                    ordinal_number: data.bill.length + 1,
                    total_money_spent: totalMoneySpent,
                    description: description,
                    is_increase: isIncrease,
                    date_now: new Date(),
                  },
                ],
              };
            }
  
            // Save updated data to localStorage
            localStorage.setItem("data", JSON.stringify(updatedData));
            return updatedData;
          } else {
            Swal.showValidationMessage("Please fill out all fields.");
            return null;
          }
        },
      });
    }
  };  

  useEffect(() => {
    if (!localStorage.getItem('data') && !isLanding) {
      handleForm();
    }
  }, [isLanding])

  const handleEditProfile = () => {
    handleForm();
  }
  const handleAddBill = () => {
    handleFormBill();
  }
  const handleDeleteSavings = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#2A9D8F",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("data");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonColor: "#2A9D8F",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          confirmButtonColor: "#2A9D8F",
          icon: "error"
        });
      }
    });
  }
  const handleSetting = () => {
    Swal.fire({
      title: "Settings",
      showConfirmButton: false,
      background: "#121212",
      color: "white",
      html: `
        <button id="editProfile" class='w-full hover:bg-[#171717] py-3 text-start px-2 rounded'>Edit Profile</button><br />
        <button id="addBill" class='w-full hover:bg-[#171717] py-3 text-start px-2 rounded'>Add Bills / Savings</button><br />
        <button id="deleteSavings" class='w-full hover:bg-[#171717] py-3 text-start px-2 rounded'>Delete Savings</button><br />
      `,
      didOpen: () => {
        document.getElementById("editProfile")?.addEventListener("click", () => {
          Swal.close();
          handleEditProfile();
        });
    
        document.getElementById("addBill")?.addEventListener("click", () => {
          Swal.close();
          handleAddBill()
        });

        document.getElementById("deleteSavings")?.addEventListener("click", () => {
          Swal.close();
          handleDeleteSavings()
        });
      },
    })
  }
  return (
    <nav className="w-full py-5 absolute">
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold">Savings</p>
        {isLanding ? 
          <Link href="/" className="text-xl font-bold"><FaArrowRightToBracket /></Link> :
          <div className="flex gap-2">
            <button className="text-xl font-bold" title="Settings" onClick={handleSetting}><FaGear /></button>
            <Link href="/" className="text-xl font-bold text-red-600" title="Logout"><FaArrowRightFromBracket /></Link>
          </div>
        }
      </div>
    </nav>
  )
}

export default ViewNavbar