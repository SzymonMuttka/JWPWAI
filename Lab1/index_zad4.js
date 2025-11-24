const StringBuilder = require("string-builder");
const sb = new StringBuilder();

sb.appendLine();
sb.append("const sb = new StringBuilder(); - tworzy obiekt StringBuilder, dzięki któremu można budować stringi.");
sb.appendLine();
sb.appendLine();
sb.append("sb.append(); - dodaje zawartość funkcji do obiektu StringBuilder.");
sb.appendLine();
sb.append("Przykładowo, sb.append(\"testowy tekst\"); doda do obiektu:");
sb.appendLine();
sb.append("testowy tekst");
sb.appendLine();
sb.appendLine();
sb.append("sb.appendLine(); - dodaje do obiektu nową linię.");
sb.appendLine();
sb.appendLine();
sb.append("sb.appendFormat(); - umożliwia formatowanie tekstu w sposób podobny do System.Console.WriteLine(); z C#.");
sb.appendLine();
sb.append("Przykładowo, sb.appendFormat(\"{0} ma {1}.\", \"Ala\", \"kota\"); doda do obiektu:");
sb.appendLine();
sb.appendFormat("{0} ma {1}.", "Ala", "kota");
sb.appendLine();
sb.appendLine();
sb.append("console.log(sb.toString()); - wyświetli całą zawartość obiektu.");

console.log(sb.toString());