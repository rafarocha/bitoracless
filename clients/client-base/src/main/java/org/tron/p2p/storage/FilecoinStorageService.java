package org.tron.p2p.storage;

import okhttp3.*;
import java.io.IOException;

public class FilecoinStorageService {

    private static final String IPFS_API_URL = "http://127.0.0.1:5001/api/v0/";
    private static final MediaType MEDIA_TYPE_OCTET = MediaType.parse("application/octet-stream");

    private final OkHttpClient httpClient;

    public FilecoinStorageService() {
        this.httpClient = new OkHttpClient();
        System.out.println("FilecoinStorageService em :" + IPFS_API_URL);
    }

    public String storeLog(byte[] logData, String filename) throws IOException {
        RequestBody requestBody = new MultipartBody.Builder()
                .setType(MultipartBody.FORM)
                .addFormDataPart("file",
                        filename,
                        RequestBody.create(logData, MEDIA_TYPE_OCTET))
                .build();

        Request request = new Request.Builder()
                .url(IPFS_API_URL + "add?pin=true") // TODO 'pin=true' -- testar com QUIC
                .post(requestBody)
                .build();

        try (Response response = httpClient.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Falha upload IPFS: " + response.code() + " " + response.message());
            }

            String jsonResponse = response.body().string();

            int hashIndex = jsonResponse.indexOf("\"Hash\":\"") + 8;
            int endIndex = jsonResponse.indexOf("\"", hashIndex);

            if (hashIndex > 8 && endIndex > hashIndex) {
                String cid = jsonResponse.substring(hashIndex, endIndex);
                System.out.println("Log armazenado com sucesso. CID: " + cid);
                return cid;
            } else {
                throw new IOException("Resposta inválida Hash não encontrado.");
            }
        }
    }

    public byte[] retrieveLog(String cid) throws IOException {
        Request request = new Request.Builder()
                .url(IPFS_API_URL + "cat?arg=" + cid) // endpoint 'cat'
                .get()
                .build();

        try (Response response = httpClient.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Falhou ao obter o arquivo: " + response.code() + " " + response.message());
            }
            System.out.println("Conteúdo CID " + cid + " recuperado.");
            return response.body().bytes();
        }
    }

}