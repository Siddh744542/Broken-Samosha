export async function POST(req){
    const data = req.formData();
    if(data.get("file"))
    return Response.json(true);
}