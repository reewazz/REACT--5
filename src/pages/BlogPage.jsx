import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "@mantine/form";
import { Button, Loader, Text, TextInput } from "@mantine/core";

const BlogPage = () => {

  const [categories,setCategories] = useState([])
  const [file,setFile] = useState(null)
  const [loading,setLoading] = useState(false)

const fetchCategories = async ()=> {
  const res = await axios.get("http://localhost:5000/category/getAll")
  console.log(res.data)
  setCategories(res.data)
}

useEffect(()=> {
  fetchCategories()
},[])

//  const form = useForm({
//     initialValues: {
//        title: "",
//     description: "",
//     author: "",
//   category : ""
//     },

//     validate: {
//       title: (value) => (value.length > 2 ? null : 'Title is short in length'),

//     },

//   });

  const [formData,setFormData] = useState({
    title: "",
    description: "",
    author: "",
    image :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIASUBAQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEEQAAEEAQIEBAMFBgMGBwAAAAEAAgMREgQhEzFBUQUiYXEygZEUI0KhwQYVUrHR8FRy4TNDU2KS8RYkNIKDk6L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAgEQEAAwEAAgMBAQEAAAAAAAAAARESAhMhAzFBUWEi/9oADAMBAAIRAxEAPwDtgIoJApqW+nQoKNKRKSpRAIxUgptaEFWKWAWivRMM9FLGYtUcVrLAoliWMuKWK0OYoYpaqsUqKtxTxSxVSMVbgjFLVWGoxCmQlStpRYpUpbp0livFOlOgnSWK6RSsr0RSWlK6RirKSIVsRpBClSKSxGkUpUilbCpACaEtAhCaWUSYSUlyt2o0lIBOktKRGym00lSFbSljXUp2qN+6YJpEysJ3SKQKESiKgQppEIqCApEJAIsGhCEQiAo0pp1apasNtFKwNT4doWqQrCyksaQsgghOihEKkbdUihFOgigkkiJYpYotO1QqTpO0kBshCEBimGq3hnsjA9lzpvSukwFZiUYlUtABPFSxKeKRBaGCWKsATpWktVSKV1BGKhanFFK7BGKFqSFEhXlijiqWqSNq3BBaiKqKkFLBGKpRIClSMUSjBToKOJTRJg8QjAIBTtVlExBRMZCttFoWzlpCWC0GikQELZ8aRXorqSxCLapCswSxVotBCnSFaXTocP0S4avpGIXG0ZzEEuEtOIRiEVlMfojhnstWIRiFRjwRitZYFExjshbNSKWgxqJjVLUIpXcMpFtIK6TxUsUIIYpYqwhFIK8CkYyrUIWqLEsVcighanFGKuoJYoWqLUsVbilSCtNSISpUoklKkiqlI0ilKkkKJFJpKpQoIQhWynQyRks+aMvVcLd8NGQTyCzZoy9VbZw1WEWFlz9VLNDDQkaWfNLNEw07IWbNHEPdVMNCVKjiFHEKJmV2yRAKqMiWZVTMrKCiQo5KLnpS0mlyVWfqjL1RaW5BGQVOSWSFLrTtUZ+qeaFLiUrVYejNFysSKhmjJCk1EqOaRcqtJJKOSLQoyUrSSKFHaartCpS/JFqm08lzp2tbaLVYKYUE8gnkoJUhSeSLUN0IJ2i6VdKVqpR5IspWlkrBSVoLlHJBKqUC5IlJFoUEWhJEmDtIlFpIzQRaSSpSVoyUd0iVVTyRartBKULLSJULRaUidotV2i0VZaLULStBOwhVpoLEwoZIv1UatOwnahaMlKW1iLUMkZBZpq1gQoZBF+qUvpO0KNotCkklHJFq0kmhQL6UDNS1Us3C5JUGf3S4yuZZ3DRaLWcSE7KYJ6pk1a20rUC8KPECUkzC0lRUOIEZJRaaRKgSi1aRJIqNpEq0TKVotRtK1UtK/VGShYRatJadotVkpWlJpbaFVkhKNLbTtU5J5qZNrLRkqskZJk2tyTytU5IytXJtbknmqckBymTbRmjNZ8kZFML5GjL1QXLPmnmmDyLibUSAVXn6oyTKbhPAdkYjsq8ynmrUpcLE7VOSeSZXUJk7pKOSM1aTUJhChmguSi07SLgoZJEpRpMuRkFXaMgrlNJlyLVdpWrlNQnaLULSyTKaTtBKryRkrlNJoVeSauTUJ2glRQlMaSJStR+aFcmjyTJUSklJpIlCiglMmkkWoWlaZTSdlBKrySJVpNrMk8lVaWSuU2uzSzVOSMkynkXZoz9VRkjJXKeRdxPVBkVGSC5Mp5F+aWfqqQUWmYPLK7Mo4ipyKMj3TJ5V2aeaz2UWVcJ5V5ekXqm0rTJ5V2aWZKqyRaZPItzRkVVkjNXJ5F2R9EKrNCZPI1oXNk8WYXhsDC8Ddx5CvRWyeIwtHk3PKnGlnMrPyc/1qkeyNpdI4NaOZJSZKx4BY8OvlS42v8SjfPHGSMbq+Vu/pSt0uzKY71BBWo4cuvm9+nVL20aN+wKpZqA9uzTfZZ43Ox4VXkd7KtZ5ZXkijzG6ZTyybppTGXQsBcGkhrjzKcOqjlOLrjlHxRP5j+vyVmlhycLXP/a2Mtfp3xEmQAg03bf/ALJXs8k1bonml1XmINfIx7GtlxlJFh3X3XVfr37C2Ak9Bdq5XzQ6SRXGHi8jCHSRB8d0S3Yt+XVdPTzxamISwvzYSQDVJlY7iVqR5JpItkAnSdJkIygkpEIxVRFCZFJK0zZWi0IVBaEk0pCQhCBIQhEsJWmhVLCSaSiWaSEKmpcDQyNme6Jo4RaS3JvQ9K78lbJpjADI4Nc4my7c36+io07xp28Th5UfPvy9LXS0+ti1TXNZEWkEWCOY7qIwP0zeG57WmRoBIjABNnpur9P/AOX0znvAwaBXmsrZ9lhEnla2N3UN2tXcA0MHgf8Atu0RXoNaJ2NcWlpsgghbGPY+emuBPYLM3QcRjQ6UlwdlliDZtdSDTMZ5qA62eZRqFkL2NOIPmBrfbf07pywHVRuhMLcByB6+qk0hxBDaHQqUusGmcBIMWv8Axk1isOkOP4l4How0Cw2foW2cfdeZ1cWoEj34+Rm2AFm/0Xp9U4GZ00UmbHbE9+xWTXxmXTCWIkSNIAIPMWt8x6cevv083A572BryQ87gg7H5rR4ZqNVo9Q7AgRPdT2uFj39Fu1MGLQ90dOuyDyLu65kk74XTNwEcT9i0u3bfqtM3T0mg151GqkgeGWG5Mcy965j8wuliegteH8N1D9Nropy5zg0W8Xzb1IXtoddpHFoZqIzly3q1meXo+Pq49pBhJ5EKxkRvcKziN6EFPiBYdfSL4ao9FXqXMhgdJiTXQcytLC6RzWMaXE8gOq43iztRrNdH4bpGEkOGQuiXevYBCUtPJLIziuc0sd+EdFKWVsQLnj7vulqdJ+7ZhpI4uJqSA6aUuNDsOwTj1ED8mOLSLx3oh238luPpw6mppIyMEefNtXdrO3XRGTAhzb5EjmtE8DW6UtiaG1uAFzeOC7yNsAbFu5rsqzbpIpZmakYNoAXt6A9bVrDK1xjeOI8DLJooV6otrKRSjHI2Rhew+UEDfbftv1TzaTWQvsVUs0lKkqUUklKkOZLwnPiidJjWwQq0ULXpdG+T/bbOBrFtm/bZaHiAuETNPbj8JaeazqFji3MQuj9jd/h3f/YEJuF8cvHa0214dGI3Vv5qrusOkkJkG+RaDgA6gR/Rei1Wgi11CUEOH4mlYR4G+GVobLGWP6j4r9uoWnKz0+oeODkc5gfPd8vn+i7Lcw3eruqCwQ6fVsm4csbi1g26hx6fJdeKIRMLgBZ5DkEVOIsBHX2WgjJoAeGkrLx3NP3sbmggEGhVnotMTQWPnc4RtFWXdAo1DHrdT9kaXvOZaPu42cz6n0XM8Q1+u1ToqZCGAWdwSP0tXyCaeY1CXMsnZw83z6LFIGFj3feyO4opjT5YwfZSi3P02v1TdcWuc6Rrhf8Al9gukXlrDlfDdRLe3XZEfhUIJtpdnvRNBaYdE8x8MERsB5AXYWmFOodnFAC0OGV9gdlh1mkjOABZxI9xmOQ7Loa7T/YI2zsylhc6nMxHl9R6LI1o1IL2BrXOeQ0vJOQ/Q+iJLzOsEg1L+IGAjbyNxH0WmFjeFG9zzgTidrrqCt0mkjl1kzC2wQR+L4u/5LLopYoZDFqNo3gW03se63Eude26LU6hjBDE8Ovdpy5gdPVbn+ISaR8TXAPYX4v7t5LJG1sc4sXgA9tHfnz9lq1enilIkLel4lSm7bZ9bJpyHaSeSORwANHbFa/APENL4fNNI7T56p45g0B7Xy5hc6WHiwBsdeYbO5gLANSWaeTFpdJG3r7rHXMS3z3MfTtaid0p1GqgIfNI632NjZ3G3bkhmn4sGL4mxZD4WEn+QXBgc+HSNfDG+TUMNDCwQOtld2DVzsazP76Q/EGtrH81qIpm7XQufBCGzAua0VkW438uyNMdCH+VkTJJHFtGvMeoVjNbHL5S14BHMjZU6rRQaiMVTXN3YR0PelaLpfJodPTpKIDjZrf6LmRal0MxiiDn10J6c1p0vEaCHOOQbVHp/fdZma3UxBkup0jZCTiXBtEDl9VKLa9a86hzYpGFsdZk79uqlqdBnpbacnje+47K1s7Z42vjI35KcgLosWeV4OzuqtLbm6XUOY8RSNtvQg/D6LeBlu3f2VsdEZAUT1rdWwPex5y8wbuNuaSsSjBo5paIaA29y7b6LY5sWm0eLji4O2P8R9Bz+aqOonwL7tx5Dt6KIErjchaW8mirK5zEy6R1X0sbWAq9x3TgaNO0siGN9eZUDLjkJPu2A0110XeyiXhr8W/IHsrUFtPEk/48v5f0TWTjj+Jn/UhTMFy8d4Rx49cGMkeWVRa42B6en+q9DPHqC0CIuy7CgPzUtLoYdO901AudvdUVuFgbNs9ltxiGLRHUWRPCRZsvNC/X+/yW4M/3knIcvRSYw0M9zzpJ87WgFr2EA79fko0z6zh5MBY+SV3wtbRr13VWqjfqdFg5jmtb+AO3+qzDU6Q8SXOd5kJdkPfvfLbktUDMoBNPk2Ntuokjf2RbUsgbptJiXFjn7HfzAdT9AuZPrWM0RZFFKAx3mOYy26nv/qrdTM/Ul7nDIH8As32F9PmtI0Ueh05MxAZjRYG2S4qJKjQawa2COXEtc2w4XsCuiHgFjQCcuZ7Lh+HaSM8SPzlkvMcqPyXcYzhxSEE+UbKzCQlrIONp3NEmDm/D2+a4Gozhbk2CTi/5T02+a9FpoW4i493ncE7lc2RjBO6SKZxYymDoCOoo9SpEtTFsuLNbDb2YTlotrhvY9+fVcnV6F80TmOZ5s7BBOx9uy3tlj0800QZh+Mx3uHda96VjZmTQxy3TXAFslcvQ/wBf5LpDk5Xh7pGYGVoPBNEg7gH+yr9XK90vBlc/7ysAxtUPdXHTtjnE0bMXABr2k7FpN/37Lc6GOVmDm3XltEhytM4N8SOmExcCKoch/XktWqh4Wi1UrgQ5xsgb1/YVLtKIp2SSOwadmyMA5319V12COdpY4B7HiiO4Sh5vT66RumaWsZTHFvmBdd77rSNcWeePTMcG+Z0pu3JHw4RztZDXnJ3BNN3229rVuo8PfqdK0aRjCWvGQv4q2pBLT67iGMTPovsA1j8tl09XO6LS4weWR5oOJuhW5K8vMHNkdCQxxZscOTRW/wA1rifqNdEMA0VHsSb5cglFugzxGPFmIzOPxkHY9grtD4m17uDOcX3VkrnaJrcZRIKcwbj+fyWUCKTWiKFzmxtdQJPP+91S3rGAVcZGPSlc3/mHzXntBqptAJOK37kHZp+I+oXfjnZLE2SJzXNcLBB6Iq6NobdXuepVwqt1hGot7WluJN1buacsg4rGuPxHYdvdBvBF3d/omXMa7MjcihQ3PZZ4zQsDcq1rqaT8Tgs06RKvUzapxbHomNp13K87N2PIdd1TcGk1LTqXPnnfiMIxZBP4iOg9StsThu5x2HypczVQyads2piuSWdwGTnbi9gAO3JZadL7Tof4of8AqCa8j+69V/gnfVCJr/HrWs3tWAKAvmeSWqmEELnn2FDqVqWYZvEfEotLI3TZDjSNJO/wDuVxNFpdTHp5GwyMc1zi58pBu/ZXzw/btaI+BIeIAZJ+YbVED3XV/dUTuCHSS4R82Z7P/wAyghovC42xOfNMZWO824FABVODdU1rg0RaCI7Bzfj9l1Z5WxROc8HBo3AF/kubrpotQHB8uNEU3Khz5bdf6qKt+06dkTBp3RNYwCtxV9K+q42q1rHue3PiFpJyYdiR/fNaXRxug4mmLJJHgtjYANj13+Sjp/BXQxRACOI85HN3LRtsO5KtIu8LbGdIJow6nuJGQXS4Yc1ra5myqI23TQKY3ytB7LcGl2LWjdRYWQRA2SBTQadW4tYvs2k073TRFot3nd/E6vzpYJfEH6nxN2kic4aaAEOEZ3kPUk/otUnmia2sA6mho3IHb0HdSmrcXxXRDHjaVj3NYbcS7+R+W6w6LURwkx2Wsvbb4CeYI6j0XZ8T4o0pBeRQ82B2DegH0XD+xu1ekdNp3t40dmsqDgB/Nb5cuvt0AwPZ9ziHdG/hPt/dKME1PMbwRWzo3bH5Lzun1j4ZmkWC13mjcfKV3mywa+K7OTe5p7B+oWqYiWnVMZNDg45wn8Q3LSsofLpnXBR9OQvqR6FNj9RA4te0Fw5nmHD++quaI9RvA9rZB8UbtkVln180xcx2nDa+Is3NLV4dqIW/dFwYB3sEH1U4H5PwAp4FFjhzH6qsaZoIzdYG2QQbJNBo9U2jw+ZdbCGkrLqvCmt04ZosQ6N2QA677+6nHBG1zSAKPVp2KnrW6bTs4moexgrYO6+3VRYhzv3Y5zpZJCYXO5Fz6y+XZTb4d+79OJZIePqS4UGiw0/qsUnjskbj9kDn1+OXkR7LnarXanVuDtRM51cgNgPZS2o+OZdjxMP1OpbHqdTHDg2zk4USVA6zSeHNY2KRuqcAKLNh8yvPudXJUyyF3WvZIknmOXef+1OqGzINOK9Dy+qbP2s1Y+KHTu25YkfqvNZKQcOppbpz09NF+1swcS/Ssd/8hFKz/wAWzk+XTRBvRpcV5QVurAK9UmGuZeod+1mpe3E6eCudb/1VM/7T+ITNxEjGNu/K3+q4EYNmhfzUyyz5t1iXeHV/f/iP+JP0Ca5eDewQstPqeYG9quUR6gGNxbX8RANH5r5+ddqGkOzcCF1tF4qJ2Obqsmua3/aM3BPcjoulPLp63TxshJp7nuPMk/p0V2Y6dF5XS+Mtjm4TvOOVgFdeDxOB8ZJdWylNabpnB8bm5UHDcg8gudpfCdNHC7T297ccS5x3b7HuruNG7gkPGD+Xc+ysOojDAGVQO9/miwqbpY4NbxmktDYhGyNvIC/5lTMj5ZiHUI29b6rCdcJS6QO8t4tb/MrEzUOGoLQRjYHPspRb0GnHEfY5KHjurfotA8wOAmfs3ejXUqGj1TZS/DyxMFvedguR+0ep48gDSXBoBjaNqv8AEf0Si2Xwp7YnHKe27ktx2vkBa6zNY1j5nzFxHJ1cr/hHt19Vx/D54tNpWvoF/KJp2BPf2VOolzcJpJHFrQTjdDb/AFRLpd4nPLqJHCUt8zy5gaSPr/VY/C5xDK/jG4z5ZG3uL5KOoIbA2eRjud1ly9FiDmNmnLA+SMg7fxd+Xb9FqIc56dv916XXv1INxytGUbr2XC1EWo0UhZJk1zDs4cwuv4Vb2NkEz3E0HMdtVb368gqvFda3VajJ0Rbi0Mc875Ec77KlWr0PivlazUAOHry/0V0ppgm0khprt286C52r0Mmlc2aMl0LvheOR9PRUCaSJwJJa/mCBuQqkX9O/FqBK8xaqw7HJsgPP8tlZL4rDpLilfmejmCz8x0Xn5dfI9ga049yOf+izAWVmZd+Pj/rpTeMPMl6ZgZ687WGWeSZ5kkc57v4nG1ANAQASdlh1jmjs2kdgmaA3VEj99haRFnXVQJHHl0VDjvsm91qHMrpEPN11ZkhOxSiUxuq5ptbZ9Ar2R5V2UYmlwoDZaKx2CxMvR8fJmmNFBQFuNDmihzcdrT4m1MFeqy7rOF6oVWcndCJa/juP+7jAqvh5KGZNeVgPcNU3FrhY29LVdUdiuzwLYY+JJkZCD1orXGZbdHGCHfwtO35rAPL1BSMj+WRPralLE02jXaiCRtm8eQI2WhviU05wf82gUCuYHvNjnfOynFK5jrbtXLfklLHTsTanCi05OqgRsB7LIx0j32fN3orGNQ8EODr990xqZM87F+wUpdO+JtQdMwyNxgafJHvV9z3WHWymW9RLZY52IsAB3ZYZNZK++M4yeh6eyU+oOocC+6AqrukpdNcLxJNnM63VYvoVKR4+zhlYh7DVc67WsjpSWDENB5WBSgH7ea/klEytjn+5khq21bcu/wCqq4ha4Oqq7bbqPFLjuN+hvkoudbj3K0xboM1I0krHRkjKiSD1v/stOtMTmzSPitr7LXDv/ZC4pH3bQDauOqe3RnTn4XEEi7WZb5izh8Rlg0n2dpunZdxy6rCSXOs7kqYbfRNrADZAB91mZd+eYgms7qQb9E+vZKj32WXSJoGroJEgBGQPyVTzuVYhjroPJcOipdYOwtIudaGuNrdPP11aJ5pABTcQeijsqwieasjZkQOhVfM7LZAwgC0n03xFytYwNbiOimGbWVJrPooTSkeVq5PXEREISVe35dFAduqN+Z3tSbd0K9aWk+xiUKePqU1FpnaS0bc1PPI7fRXCCMfjI9wk7Twh3/qP/wAldN8vH4u0A01sb3TDCD5tleyBpFCYH2CtGkZ/xVPJy14e5ZC0jqgBbPsQ/wCJ+Sf2EjlI2lPJyvg7/jDVcgmCa5BanaFx/G1VO0czSKaCOtOC1HfM/qT8XcfivY8kURysKRhc3m1wHqFHE8hsrcJiSDnBMnZINN0SptZtbjQ7lJ9JmZR2A/kjl5ug6qt0wHljGXclRLXOOTz8lLaj40zJZIYkAKsn5INeylG0Hdwvssy68xQBJ9EVyG99VZ12HLsmG0QT8ll0QNDc/QKBJqtvqpSO32VL3UrEMzJOdWypLrUiVWea3EPP10L6oPOwmN03bdFWETy5JHkmbUo4y8jfbqUI9p6eL8fPsFthhbGC+R1k9ChlMaHOFVyCommyJ7dlibl6YrmEppS84t2aq+l9uZUATyPNWsB9TfRSqLsDf36BaIo6580RxBlH8auY3EF7lJl15gUUJ8RvYfVJZqWrhjMoArF23dJpc82GX+itMTByZfuou8pOIIHsolG34gScSrs6qnGvdZ6cRtlfzATANb380lprbMR1UhqT/D+axjIhTGVcjfssUttjZWu/CVIGM3f0tYL3AdftSk07cwPmmVbSIj+Ige6iYYSfjKyZgmst1JuJFX9Ui4SoXmGIbh/5KmTRiTd099tkyQ3oPdTEoA2cD8grqTHKDdGwCo5AO+25QdAT/vm/RWfaHbNqz6KYc75Kb6McqB4cbsytr2UxoSTZk/JWcRw5ED5KL9QBQLiT6K66McwbdCBsZK91J2ia4AcagP8AlWU6yhTWql2okeLKRqU/5an6bTtH+1PrVWs+OmyqpDX8R2VBJ7ge4SyJK3FsTTRhpTsYz8if6qLtLpXcmyNPuFUAcuiuFDl8PolymYn8VnSsbykPpbVTKwDa7WvG7rYKHDbe5VjqUn44/GUMvktUMYY3808Gjt8k3FzhiB9FdWzHx0z6iXfnfyVMYyJs7Kbo3OJvZWw6fLd/wjv1W4mKcpiZ6RawlxLqaBva0NkY1hxs1+ajLTtg2gFW6RrdhzUn239J8eRos7c7VZnkf8Tiq3vvlzVZPqrHLn13K/M+iFnzQtZZ8joOG25JQ0U6gT9UIXne5aG3zJ+qXAy3zP0QhFJzGtqr+qkXULItCFBQDl8NNrsE/hqzlaaFQ289tvZGOTyAaFIQpKpvgHDyyPspQxNe3IgCj23TQosJSHFtAD36qguqz2QhIhJLIiq2UXk80IWoZlXdjlSQFkIQqwYaAcUUB0CEIJD2UuXJNCNwVnupBqEKKsZGHJPbjsChCzH2fiHwjulxzYBaCEIW3OVjo2vjLm+UrBK2jzQhdOXHtWeaiRumhdHAqTQhS0f/2Q== ",
  category : ""
  })


  const handleChange =(e)=>{
    console.log(e,'event')
    setFormData({
  ...formData,
      [e.target.name] : e.target.value
    }
    
    )
  }

 


  // console.log(form.errors,"checking errors")
  const handleSubmit =  async()=> {
   try{
     setLoading(true)
   
const myForm = new FormData()
myForm.append('title',formData.title)
myForm.append('description',formData.description)
myForm.append('author',formData.author)
myForm.append('category',formData.category)
myForm.append('blogImage',file)
setFile(null)

    const response = await axios.post ("http://localhost:5000/blog/create",myForm)
    console.log(response)
 
   }
   catch(err){
console.error(err)
   }
   finally{
    setLoading(false)
   }
    // form.reset()

  }
  
  console.log(loading,"running or not")

  return (
    <div className="flex items-center flex-col">
      <Text unstyled className = "text-red-500 font-bold">hjdagcjhsvcjh</Text>
      <div className=" flex flex-col gap-2">
        
        <TextInput  label="Title"  name="title" value={formData.title} onChange={(e)=>handleChange(e)}  />

<input type="file" onChange={(e)=>setFile(e.target.files[0])} />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="description"  >description</label>
        <input
          type="text"
          id="description"
          value={formData.description}
          name= 'description' onChange={(e)=>handleChange(e)}
          className="bg-gray-200 p-4  border-2"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="author">author</label>
        <input type="text" id="author" name= 'author' value={formData.author} onChange={(e)=>handleChange(e)} className="bg-gray-200 p-4  border-2" />
      </div>
      {/* <div className=" flex flex-col gap-2">
        <label htmlFor="image">image</label>
        <input type="text" id="image" className="bg-gray-200 p-4  border-2" />
      </div> */} 
    <select name="category" id="" value={formData.category} onChange={(e)=>handleChange(e)}>
<option value=""> Select a category</option>


 {categories.map((item,index)=>(
  <option key={index} value={item?._id}>{item.title}</option>
 ))}

    </select>

  {loading && <Loader/>}

     <Button loading={loading} onClick={handleSubmit}>Submit </Button>
    </div>
  );
};

export default BlogPage;
